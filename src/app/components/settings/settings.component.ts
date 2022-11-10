import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { global } from 'src/app/services/global';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public title:string = "Ajustes del Usuario";
  public parrafo:string = "Modifica tus datos personales de usuario";
  public labelName:string = "Nombre";
  public apppat:string = "Apellido paterno";
  public apmat:string = "Apellido materno";
  public labelEmail:string = "Correo electronico";
  public desc:string = "Descripcion del usuario";
  public images:string = "Imagen del usuario";
  public EnterUpdate:string = "Actualizar";
  public user:User;
  public identity:any;
  public token:any;
  public resetVar:boolean = true;
  public url:string;

  public afuConfig:any = {
    multiple: false,
    formatsAllowed: ".jpg,.png , .gif , .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:global.url+'user/upload',
      method:"POST",
      headers: {
      "Authorization" : this._userService.getToken()
      },
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: true,
    fileNameIndex: true,
    autoUpload: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Adjuntar archivos',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};


  constructor(private _userService:UserService) { 
    this.user = new User(1,'','','','','','','',[]);
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;

    this.url = global.url;

    this.user = new User(this.identity.sub,
                         this.identity.name,
                         this.identity.surname,
                         this.identity.lastname,
                         this.identity.email,
                         '',
                         this.identity.description,
                         this.identity.image,
                         this.identity.roles
                         );
  }

  ngOnInit(): void {
  }

  public onSubmit(form){
    this._userService.update(this.token,this.user).subscribe(
      (response) => {
        if(response && response.status == 'success'){
          Swal.fire({
            icon: 'success',
            title: '¡Enhorabuena!',
            text: "usuario actualizado correctamente"
          })

          if(response.changes.name){
            this.user.name = response.changes.name;
          }

          if(response.changes.surname){
            this.user.surname = response.changes.surname;
          }

          if(response.changes.lastname){
            this.user.lastname = response.changes.lastname;
          }

          if(response.changes.email){
            this.user.email = response.changes.email;
          }

          if(response.changes.description){
            this.user.description = response.changes.description;
          }

          if(response.changes.image){
            this.user.image = response.changes.image;
          }

          this.identity = this.user;
          localStorage.setItem('identity',JSON.stringify(this.identity));

          console.log(response);
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "error al actualizar al usuario"
          })
        }
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public avatarUpload(data:any){
    let dato = data.body;
    this.user.image = dato.image;
  }

}
