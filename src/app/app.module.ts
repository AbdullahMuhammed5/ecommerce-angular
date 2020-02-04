import { HttpClient } from 'selenium-webdriver/http';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home-container/home/home.component';
import { HeaderComponent } from './home-container/header/header.component';
import { FooterComponent } from './home-container/footer/footer.component';
import { ProductsComponent } from './home-container/products/products.component';
import { CartComponent } from './home-container/cart/cart.component';
import { ProductDetailsComponent } from './home-container/product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ProfileComponent } from './home-container/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    LoginComponent,
    HomeContainerComponent,
    ProfileComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
