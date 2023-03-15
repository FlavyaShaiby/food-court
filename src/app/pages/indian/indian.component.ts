import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { IndianserviceService } from 'src/app/indianservice.service';
import { indian } from 'src/assets/data';

@Component({
  selector: 'app-indian',
  templateUrl: './indian.component.html',
  styleUrls: ['./indian.component.css']
})
export class IndianComponent {
  constructor(private obj:IndianserviceService,private router:Router){}
  indian=this.obj.getData();

  gotoHere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/data/' +id]);
  }
}

