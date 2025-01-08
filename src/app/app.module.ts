import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersDashboardComponent } from './shared/component/users-dashboard/users-dashboard.component';
import { ProductsDashboardComponent } from './shared/component/products-dashboard/products-dashboard.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './shared/component/users-dashboard/user/user.component';
import { UserFormComponent } from './shared/component/users-dashboard/user-form/user-form.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { ProductComponent } from './shared/component/products-dashboard/product/product.component';
import { ProductFormComponent } from './shared/component/products-dashboard/product-form/product-form.component';
import { FairCardComponent } from './shared/component/fairs/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/component/fairs/fair-details/fair-details.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { AdminDashboardComponent } from './shared/component/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersDashboardComponent,
    ProductsDashboardComponent,
    FairsComponent,
    UserComponent,
    UserFormComponent,
    PageNotFoundComponent,
    ProductComponent,
    ProductFormComponent,
    FairCardComponent,
    FairDetailsComponent,
    AuthComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
