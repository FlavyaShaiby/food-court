import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
name:string=''
email:string=''
password:string='' 

constructor(private fires:HeroService){}

login(){
  this.fires.login(this.email,this.password)

  this.name=''
  this.email=''
  this.password=''
  
}
}
