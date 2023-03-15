import { Injectable } from '@angular/core';
import { icecream } from 'src/assets/data';
@Injectable({
  providedIn: 'root'
})
export class IcecreamserviceService {

  constructor() { }
  getData()
  {

    return icecream

  }
}
