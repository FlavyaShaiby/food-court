import { Injectable } from '@angular/core';
import { indian } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class IndianserviceService {

  constructor() { }
  getData()
  {

    return indian

  }
}


