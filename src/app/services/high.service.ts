import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';
import { High } from '../models/high';

@Injectable({
  providedIn: 'root'
})
export class HighService {

  public url:string;

  constructor(
    private _http:HttpClient
  ) {
    this.url = global.url;
   }

   public getHighs():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.get(this.url+'high_iron',{headers});
   }

   public create(token,high):Observable<any>{
      let json = JSON.stringify(high);
      let params = 'json='+json;

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                     .set('Authorization',token);

      return this._http.post(this.url+'high_iron',params,{headers});
   }
}
