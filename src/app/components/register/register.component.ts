import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
import { RolesService } from 'src/app/services/roles.service';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public rol_user:Array<any> = [];
  public title:string = "Registrate";
  public EnterRegister:string = "Registrar";
  public parrafo:string = "¿Ya estas registrado? ve a";
  public labelName:string = "Nombre";
  public apppat:string = "Apellido paterno";
  public apmat:string = "Apellido materno";
  public labelEmail:string = "Correo electronico";
  public labelPassword:string = "Contraseña";
  public desc:string = "Descripcion";
  public labelRol:string = "Elige el rol de usuario";
  public user:User;
  constructor(
    private _userService:UserService,
    private _roleService:RolesService
  ) { 
    this.user = new User(1,'','','','','','','',[]);
  }

  ngOnInit(): void {
    $('.textoLink').css('text-decoration','none');
    this.getRoles();
  }

  public getRoles(){
    return this._roleService.getRoles().subscribe(
      (response) =>{
        if(response.status == 'success'){
         let data = this.rol_user = response.roles;
          console.log(data);
        }
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  public onSubmit(form){
    this._userService.register(this.user).subscribe(
      (response)=>{
        if(response.status == 'success'){
          Swal.fire({
            icon: 'success',
            title: '¡Enhorabuena!',
            text: response.message
          })

          console.log(response);

          form.reset();
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "error"
          })
        }
      },
      (error)=>{
        console.error(<any>error);
      }
    );
  }

}
