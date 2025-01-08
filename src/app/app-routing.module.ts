import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/component/home/home.component";
import { UsersDashboardComponent } from "./shared/component/users-dashboard/users-dashboard.component";
import { ProductsDashboardComponent } from "./shared/component/products-dashboard/products-dashboard.component";
import { FairsComponent } from "./shared/component/fairs/fairs.component";
import { UserComponent } from "./shared/component/users-dashboard/user/user.component";
import { UserFormComponent } from "./shared/component/users-dashboard/user-form/user-form.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { ProductFormComponent } from "./shared/component/products-dashboard/product-form/product-form.component";
import { ProductComponent } from "./shared/component/products-dashboard/product/product.component";
import { FairDetailsComponent } from "./shared/component/fairs/fair-details/fair-details.component";
import { AuthComponent } from "./shared/component/auth/auth.component";
import { AuthGuard } from "./shared/services/auth.guard";
import { AdminDashboardComponent } from "./shared/component/admin-dashboard/admin-dashboard.component";
import { UserRoleGuard } from "./shared/services/user-role.guard";
import { CanDeactivateGuard } from "./shared/services/can-deactivate.guard";
import { ProductResolverService } from "./shared/services/product-resolver.service";
import { ProductResolver } from "./shared/services/product.resolver";

//http://localhost:4200 >>home component
//http://localhost:4200/home >>home component
//http://localhost:4200/users >>users-dashboard component
//http://localhost:4200/products >>products-dashboard component
//http://localhost:4200/fairs >>fairs component


const appRoutes:Routes=[
    {
        path:'',
        // component:HomeComponent
        // redirectTo:'home',
        // pathMatch:'full'
        component:AuthComponent,
        
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate:[AuthGuard,UserRoleGuard],
        title:'Dashboard',
        data:{
            userRoles:['ADMIN','BUYER','SUPER_ADMIN']
        }
    },
    {
        path:'users',
        component:UsersDashboardComponent,
        canActivate:[AuthGuard,UserRoleGuard],
        title:'Users',
        data:{
            userRoles:['ADMIN','SUPER_ADMIN']
        },
        children:[
            {
                path:'adduser',
                component:UserFormComponent
            },
            {
                path:':userId',
                component:UserComponent
            },
            {
                path:':userId/edit',
                component:UserFormComponent,
                canDeactivate:[CanDeactivateGuard]
            },
        ]
    },
    // {
    //     path:'users/adduser',
    //     component:UserFormComponent
    // },
    // {
    //     path:'users/:userId',
    //     component:UserComponent
    // },
    // {
    //     path:'users/:userId/edit',
    //     component:UserFormComponent
    // },
    {
        path:'products',
        component:ProductsDashboardComponent,
        canActivate:[AuthGuard,UserRoleGuard],
        title:'Products',
        data:{
            userRoles:['ADMIN','BUYER','SUPER_ADMIN']
        },
        resolve:{productData : ProductResolverService},
        children:[
            {
                path:'addproduct',
                component:ProductFormComponent
            },
            {
                path:':productId',
                component:ProductComponent,
                resolve:{productObj:ProductResolver}
            },
            {
                path:':productId/edit',
                component:ProductFormComponent,
                canDeactivate:[CanDeactivateGuard]
            },
        ]
    },
    // {
    //     path:'products/addproduct',
    //     component:ProductFormComponent
    // },
    // {
    //     path:'products/:productId',
    //     component:ProductComponent
    // },
    // {
    //     path:'products/:productId/edit',
    //     component:ProductFormComponent
    // },
    {
        path:'fairs',
        component:FairsComponent,
        canActivate:[AuthGuard,UserRoleGuard],
        title:'Fairs',
        data:{
            userRoles:['ADMIN','BUYER','SUPER_ADMIN']
        },
        children:[
            {
                path:':fairId',
                component:FairDetailsComponent
            }
        ]
    },
    {
        path:'admin',
        component:AdminDashboardComponent,
        title:'Admin',
        data:{
            userRoles:['SUPER_ADMIN']
        },
        canActivate:[AuthGuard,UserRoleGuard]
    },
    {
        path:'page-not-found',
        component:PageNotFoundComponent,
        canActivate:[AuthGuard],
        title:'Page-Not-Found',
        data:{
            msg:`Page Not Found (Using static data of Routing)`
        }
    },
    {
        path:'**',
        // component:PageNotFoundComponent
        redirectTo:'page-not-found'
    },
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}