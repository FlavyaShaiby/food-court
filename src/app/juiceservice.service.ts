import { Injectable } from '@angular/core';
import { juice } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class JuiceserviceService {

  constructor() { }
  getData()
  {

    return juice

  }

}
