import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';
import { Property } from '../models/property';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public url:string;
  constructor(
    private _http:HttpClient
  ) {
    this.url = global.url;
   }

   public getPropertys():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'property',{headers});
   }

   public create(token,property):Observable<any>{
      let json = JSON.stringify(property);
      let params = 'json='+json;

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                     .set('Authorization',token);

      return this._http.post(this.url+'property',params,{headers});
   }

   public update(token,property,id):Observable<any>{
      let json = JSON.stringify(property);
      let params = 'json='+json;
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                     .set('Authorization',token);
      
      return this._http.put(this.url+'property/'+id,params,{headers});
   }

   public getProperty(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'property/'+id,{headers});
   }

}
