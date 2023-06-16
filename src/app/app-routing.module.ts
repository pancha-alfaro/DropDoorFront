import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateaccountComponent } from './pages/createaccount/createaccount.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DataComponent } from './pages/data/data.component';
import { ProductsdataComponent } from './pages/productsdata/productsdata.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create', component: CreateaccountComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'blog', component:BlogsComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'checkout', component: PaymentComponent},
  {path:'users', component: DataComponent},
  {path: 'productlist', component: ProductsdataComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
