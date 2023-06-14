import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogwidgetComponent } from './components/blogwidget/blogwidget.component';
import { DataComponent } from './pages/data/data.component';
import { ProductsdataComponent } from './pages/productsdata/productsdata.component';
import { OpinionsComponent } from './pages/opinions/opinions.component'

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
    PaymentComponent,
    HomeComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    BlogwidgetComponent,
    DataComponent,
    ProductsdataComponent,
    OpinionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
