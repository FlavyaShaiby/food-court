import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeralaserviceService } from 'src/app/keralaservice.service';
import { kerala } from 'src/assets/data';

@Component({
  selector: 'app-kerala',
  templateUrl: './kerala.component.html',
  styleUrls: ['./kerala.component.css']
})
export class KeralaComponent {
  constructor(private obj:KeralaserviceService,private router:Router){}
  kerala=this.obj.getData();

  gotoHere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/data/' +id]);
  }
}
