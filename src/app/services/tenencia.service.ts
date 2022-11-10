import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';
import { Tenencia } from '../models/tenencia';

@Injectable({
  providedIn: 'root'
})
export class TenenciaService {
  public url:string;
  constructor(
    private _http:HttpClient
  ) { 
    this.url = global.url;
  }

  public getTypeTenencias():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'tenencia',{headers});
  }

  public create(token,tenencia):Observable<any>{
    let json = JSON.stringify(tenencia);
    let params = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                   .set('Authorization',token);
    return this._http.post(this.url+'tenencia',params,{headers});
  }

}
