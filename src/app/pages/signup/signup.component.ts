import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
name:string=''
email:string=''
password:string=''
cpass:string=''

constructor(private fires:HeroService){}

submit(){
  this.fires.signup(this.email,this.password)

  this.name=''
  this.email=''
  this.password=''
  this.cpass=''
}
}

