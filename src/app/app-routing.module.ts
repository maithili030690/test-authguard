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
        component:AuthComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'users',
        component:UsersDashboardComponent,
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
                component:UserFormComponent
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
        children:[
            {
                path:'addproduct',
                component:ProductFormComponent
            },
            {
                path:':productId',
                component:ProductComponent
            },
            {
                path:':productId/edit',
                component:ProductFormComponent
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
        children:[
            {
                path:':fairId',
                component:FairDetailsComponent
            }
        ]
    },
    {
        path:'page-not-found',
        component:PageNotFoundComponent
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