import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { State } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public url:string;
  constructor(private _http:HttpClient) {
    this.url = global.url;
   }

   public getState():Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

      return this._http.get(this.url+'state',{headers});
   }
}
