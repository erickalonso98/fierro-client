import { Component, OnInit,DoCheck } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
 
  public title:string = "Ventanilla Unica de Registro de Fierro Ganadero";
  public dropbutton:string = "Usuario";
  public me:string = "Mi Perfil";
  public sett:string = "Ajustes";
  public leave:string = "Salir";
  public identity:any;
  public token:any;
  
  constructor(
    private _userService:UserService
  ){
    this.getDateToken();
  }

  ngOnInit():void{
    $('[name="title"]').css('text-transform','uppercase');
  }

  ngDoCheck(): void {
    this.getDateToken();
  }

  public getDateToken(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}
