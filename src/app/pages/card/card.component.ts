import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
// url:string="C:\Users\flavy\OneDrive\Desktop\miniproject\foodcourt\src\assets\images\eatout.png"

changeImage(event:any){
  console.log(event);
}


}
