import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { chinese } from 'src/assets/data';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private auth:Auth,private router:Router,private fire:Firestore) { }
  signup(email:string,password:string){
    createUserWithEmailAndPassword(this.auth,email,password).then(res=>{
      alert("signup successfully")
      this.router.navigate(['/home'])
    }).catch(err=>{
      alert(err)
    })
  }
  login(email:string,password:string){
signInWithEmailAndPassword(this.auth,email,password).then(res=>{
  alert("login successfully")
  this.router.navigate(['/home'])
}).catch(err=>{
  alert(err)
})
  }
  getData()
  {

    return chinese

  }
}

  


















