import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';
import { Munucipalitie } from '../models/municipalitie';

@Injectable({
  providedIn: 'root'
})
export class MunicipalitieService {
  public url:string;

  constructor(private _http:HttpClient) {
    this.url = global.url;
   }

   public getMunicipalitys():Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

      return this._http.get(this.url+'municipalitie/',{headers});
   }

   public getMunicipalitie(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'municipalitie/'+id,{headers});
   }

   public create(token,municipalitie):Observable<any>{
    let json = JSON.stringify(municipalitie);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                   .set('Authorization',token);
    return this._http.post(this.url+'municipalitie',params,{headers});
   }

}
