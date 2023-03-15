import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ChineseComponent } from './chinese/chinese.component';
import { OrderComponent } from './pages/order/order.component';
import { AboutComponent } from './pages/about/about.component';
import { IndianComponent } from './pages/indian/indian.component';
import { KeralaComponent } from './pages/kerala/kerala.component';
import { ArabicComponent } from './pages/arabic/arabic.component';
import { IcecreamComponent } from './icecream/icecream.component';
import { JuiceComponent } from './pages/juice/juice.component';
import { SignupComponent } from './pages/signup/signup.component';
import { arabic, kerala } from 'src/assets/data';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},

{path:'order',component:OrderComponent},
{path:'about',component:AboutComponent},
{path:'chinese',component:ChineseComponent},
{path:'indian',component:IndianComponent},
{path:'kerala',component:KeralaComponent},
{path:'arabic',component:ArabicComponent},
{path:'icecream',component:IcecreamComponent},
{path:'juice',component:JuiceComponent},
{path:'signup',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
