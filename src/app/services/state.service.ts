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

   public getStateOne(id):Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.get(this.url+'state/'+id,{headers});
   }

   public create(token,state):Observable<any>{
    let json = JSON.stringify(state);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                   .set('Authorization',token);
    return this._http.post(this.url+'state',params,{headers});
   }
}
