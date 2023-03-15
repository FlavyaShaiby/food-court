import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.css']
})
export class ChineseComponent {
  constructor(private obj:HeroService,private router:Router){}
  chinese=this.obj.getData();

  gotoHere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/bed/' +id]);
  }
}
