import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BookComponent } from './book/book.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { CardComponent } from './pages/card/card.component';
import { ContactComponent } from './pages/contact/contact.component';

import { OrderComponent } from './pages/order/order.component';

import { SingleComponent } from './single/single.component';
import { ChineseComponent } from './chinese/chinese.component';
import { IndianComponent } from './pages/indian/indian.component';
import { KeralaComponent } from './pages/kerala/kerala.component';
import { ArabicComponent } from './pages/arabic/arabic.component';
import { IcecreamComponent } from './icecream/icecream.component';
import { JuiceComponent } from './pages/juice/juice.component';
import { SignupComponent } from './pages/signup/signup.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BookComponent,
    MenuComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CardComponent,
    ContactComponent,
    
    OrderComponent,
  
    SingleComponent,
       ChineseComponent,
       IndianComponent,
       KeralaComponent,
       ArabicComponent,
       IcecreamComponent,
       JuiceComponent,
       SignupComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
