import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { Iron_Type } from '../models/iron_type';

@Injectable({
  providedIn: 'root'
})
export class IronTypeService {

  public url:string;

  constructor(
    private _http:HttpClient
  ) {
    this.url = global.url;
   }

   public getIronType():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'type_iron',{headers});
   }

   public create(token,iron_type):Observable<any>{
      let json = JSON.stringify(iron_type);
      let params = 'json='+json;

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                     .set('Authorization',token);
        
      return this._http.post(this.url+'type_iron',params,{headers});
   }
}
