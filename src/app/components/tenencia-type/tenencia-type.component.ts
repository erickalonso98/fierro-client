import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TenenciaService } from 'src/app/services/tenencia.service';
import { Tenencia } from 'src/app/models/tenencia';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tenencia-type',
  templateUrl: './tenencia-type.component.html',
  styleUrls: ['./tenencia-type.component.css']
})
export class TenenciaTypeComponent implements OnInit {

  public page_title:string = "Tipo de tenencia de la tierra";
  public list:string = "Información de tipos de la tenencia de la tierra";
  public parrafo:string = "Registra el tipo de tenencia de la tierra";
  public labelName:string = "Tenencia de la tierra";
  public btnRegister:string = "Registrar";
  public opened:boolean = false;
  public open:string = "Abrir Menu";
  public menu:string = "Menú";
  public cerrar:string = "Cerrar";
  public person:string = "Personas";
  public property:string = "Predial";
  public iron:string = "Fierro";
  public exploitation:string = "Tipo de explotación";
  public tenencia:string = "Tipo de tenencia de la tierra";
  public type_iron:string = "Tipo de fierro";
  public users:string = "Usuarios";
  public roles:string = "Roles de usuario";
  public report:string = "Reporte x Ine";

  public type_tenencia:Tenencia;
  public token:any;
  public identity:any;

  constructor(
    private _userService:UserService,
    private _tenenciaService:TenenciaService
  ) { 
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
    this.type_tenencia = new Tenencia(1,'');
  }

  ngOnInit(): void {
  }

  public toggleSidebar(){
    this.opened = !this.opened;
  }

  public onSubmit(form){
    this._tenenciaService.create(this.token,this.type_tenencia).subscribe(
      (response) => {
        if(response.status == 'success'){
          console.log(response);
          Swal.fire({
            icon: response.status,
            title: '¡Enhorabuena!',
            text: "Se ha creado con exito!!"
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: '¡Oops...!',
            text: response.message
          })
        }
        form.reset();
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

}
