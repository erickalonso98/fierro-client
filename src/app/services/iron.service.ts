import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';
import { Iron } from '../models/iron';

@Injectable({
  providedIn: 'root'
})
export class IronService {

  public url:string;

  constructor(
    private _http:HttpClient
  ) { 
    this.url = global.url;
  }

  public getIrons():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'iron',{headers});
  }

  public create(token,iron):Observable<any>{
    let json = JSON.stringify(iron);
    let params = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                   .set('Authorization',token);
    
    return this._http.post(this.url+'iron',params,{headers});

  }

  public getIron(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'iron/'+id,{headers});
  }

}
