import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateaccountComponent } from './pages/createaccount/createaccount.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PaymentComponent } from './pages/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AvatarComponent,
    LoginComponent,
    CreateaccountComponent,
    ProfileComponent,
    ProductsComponent,
    BlogsComponent,
    AboutusComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
