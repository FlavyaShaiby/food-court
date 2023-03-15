import { Injectable } from '@angular/core';
import { arabic } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class ArabicserviceService {

  constructor() { }
  getData()
  {

    return arabic

  }
}
