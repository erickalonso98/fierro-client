import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public url:string;

  constructor(
    private _http:HttpClient
  ) { 
    this.url = global.url;
  }

  public getPersons():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.get(this.url+'person',{headers});
  }

  public create(token,person):Observable<any>{
    let json = JSON.stringify(person);
    let params = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                   .set('Authorization',token);
    
    return this._http.post(this.url+'person',params,{headers});                             
  }

  public getPerson(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'person/'+id,{headers:headers});
  }

  public update(token,person,id):Observable<any>{
    let json = JSON.stringify(person);
    let params = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                   .set('Authorization',token);

    return this._http.put(this.url+'person/'+id,params,{headers});
  }

  public delete(token,id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                   .set('Authorization',token);

    return this._http.delete(this.url+'person/'+id,{headers});
  }

  public reporte_ine(ine):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'person/report_ine/'+ine,{headers});
  }

  public reporte_curp(curp):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'person/report_curp/'+curp,{headers});
  }

  public reporte_rfc(rfc):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'person/report_rfc/'+rfc,{headers});
  }

  public reporte_name(name):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'person/report_name/'+name,{headers});
  }
}
