import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  public url:string;
  constructor(private _http:HttpClient) {
    this.url = global.url;
   }

   public getRoles():Observable<any>{
    return this._http.get(this.url+'role_user');
   }

   public create(token,role):Observable<any>{
      let json = JSON.stringify(role);
      let params = 'json='+json;

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                     .set('Authorization',token);

      return this._http.post(this.url+'role_user',params,{headers});
   }
}
