import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IcecreamserviceService } from '../icecreamservice.service';

@Component({
  selector: 'app-icecream',
  templateUrl: './icecream.component.html',
  styleUrls: ['./icecream.component.css']
})
export class IcecreamComponent {
  constructor(private obj:IcecreamserviceService,private router:Router){}
  icecream=this.obj.getData();
 
   gotoHere(id:any)
   {
     localStorage.setItem('id',id);
     this.router.navigate(['/data/' +id]);
 }
}
