import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public url:string;

  constructor(private _http:HttpClient) {
    this.url = global.url;
   }

   public StateMunicipality(state_id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'location/states_municipalities/state/'+state_id,{headers:headers});
   }

   public MunicipalityLocation(municipalitie_id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'location/locations_municipalities/'+municipalitie_id,{headers:headers});
   }
}
