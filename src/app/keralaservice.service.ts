import { Injectable } from '@angular/core';
import { kerala } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class KeralaserviceService {

  constructor(){}
  getData()
  {

    return kerala

  }
}