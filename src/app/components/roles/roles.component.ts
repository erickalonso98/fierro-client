import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { UserService } from 'src/app/services/user.service';
import { Roles } from 'src/app/models/roles';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  public page_title:string = "Crear rol de usuario";
  public labelName:string = "Rol";
  public title_rol:string = "Roles";
  public buttonrol:string = "Registrar";
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
  public parrafo:string = "Registra el rol para asignarle al usuario";

  public role:Roles;
  public token:any;
  public identity:any;

  constructor(
    private _roleService:RolesService,
    private _userService:UserService
  ) { 
    this.role = new Roles(1,'');
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(): void {
  }

  public toggleSidebar(){
    this.opened = !this.opened;
  }

  public onSubmit(form){
    this._roleService.create(this.token,this.role).subscribe(
      (response) => {
        if(response.status == 'success'){
          Swal.fire({
            icon: response.status,
            title: '¡Enhorabuena!',
            text: response.message
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "error"
          })
        }
        form.reset();
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }


}
