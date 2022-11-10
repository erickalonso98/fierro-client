import { Component, OnInit } from '@angular/core';
import { IronTypeService } from 'src/app/services/iron-type.service';
import { UserService } from 'src/app/services/user.service';
import { Iron_Type } from 'src/app/models/iron_type';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iron-type',
  templateUrl: './iron-type.component.html',
  styleUrls: ['./iron-type.component.css']
})
export class IronTypeComponent implements OnInit {

  public title:string = "Tipo de fierro";
  public title_page_parrafo:string = "Tipo de fierro para herrar ganado";
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
  public informations:string = "Información del tipo de fierro";
  public roles:string = "Roles de usuario";
  public report:string = "Reportes";

  public labelname:string = "Nombre del tipo de fierro";
  public EnterIron:string = "Registrar";

  public iron_type:Iron_Type;

  public token:any;
  public identity:any;

  constructor(
    private _ironTypeService:IronTypeService,
    private _userService:UserService
  ) {
      this.iron_type = new Iron_Type(1,'');
      this.token = this._userService.getToken();
      this.identity = this._userService.getIdentity();
   }

  ngOnInit(): void {
  }

  public toggleSidebar(){
    this.opened = !this.opened;
  }

  public onSubmit(form){
    this._ironTypeService.create(this.token,this.iron_type).subscribe(
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
        console.error(<any>error);
      }
    );
  }

}
