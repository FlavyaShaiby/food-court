import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JuiceserviceService } from 'src/app/juiceservice.service';

@Component({
  selector: 'app-juice',
  templateUrl: './juice.component.html',
  styleUrls: ['./juice.component.css']
})
export class JuiceComponent {
  constructor(private obj:JuiceserviceService,private router:Router){}
  juice=this.obj.getData();

  gotoHere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/data/' +id]);
  }
}
