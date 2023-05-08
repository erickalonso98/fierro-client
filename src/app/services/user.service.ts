import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url:string;
  public token:any;
  public identity:any;

  constructor(
    private _http:HttpClient
  ) { 
    this.url = global.url;
  }

  public getUsers():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'users',{headers});
  }

  public getUsersRol():Observable<any>{
    return this._http.get(this.url+'user/roles_entry');
  }

  public register(user):Observable<any>{
    let json = JSON.stringify(user);
    let params = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'register',params,{headers});
  }

  public login(user, gettoken = null):Observable<any>{
    if(gettoken != null){
      user.gettoken = 'true';
    }

    let json = JSON.stringify(user);
    let params = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'login',params,{headers});
  }

  public update(token,user):Observable<any>{
    let json = JSON.stringify(user);
    let params = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                   .set('Authorization',token);

    return this._http.put(this.url+'user/update',params,{headers});
  }

  public getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));

    if(identity && identity != "undefined"){
      this.identity = identity;
    }else{
      this.identity = null;
    }

    return this.identity;
  }

  public getToken(){
    let token = localStorage.getItem('token');

    if(token && token != "undefined"){
      this.token = token;
    }else{
      this.token = null;
    }

    return this.token;
  }

  public profile(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'user/profile/'+id,{headers});
  }

}
