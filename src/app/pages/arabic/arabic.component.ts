import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArabicserviceService } from 'src/app/arabicservice.service';

@Component({
  selector: 'app-arabic',
  templateUrl: './arabic.component.html',
  styleUrls: ['./arabic.component.css']
})
export class ArabicComponent {
  constructor(private obj:ArabicserviceService,private router:Router){}
 arabic=this.obj.getData();

  gotoHere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/data/' +id]);
}
}