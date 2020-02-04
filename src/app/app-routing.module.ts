import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-container/home/home.component';
import { ProductsComponent } from './home-container/products/products.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './home-container/cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './home-container/product-details/product-details.component';
import { HomeContainerComponent } from './home-container/home-container.component';

const routes: Routes = [
  {
    path: "", redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: "home", 
    component: HomeContainerComponent,
    children: [
        {
            path: "", component: HomeComponent
        },
        {
            path: "shop", component: ProductsComponent
        },
        {
            path: "cart", component: CartComponent
        },
        {
            path: "product-details", component: ProductDetailsComponent
        },
        {
            path: "signup", component: SignupComponent
        }
    ]
  },
  {
    path: "login", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
