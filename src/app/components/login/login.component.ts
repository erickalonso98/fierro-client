import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { RolesService } from 'src/app/services/roles.service';
import { User } from 'src/app/models/user';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public title:string = "Log In";
  public text:string = "Inicia sesion para continuar";
  public labelEmail:string = "Correo electronico";
  public labelPassword:string = "Contraseña";
  public Enter:string = "Ingresar";
  public textRegister:string = "Registrate";
  public user:User;
  public token:any;
  public identity:any;

  constructor(
    private _userService:UserService,
    private _roleService:RolesService,
    private router:Router,
    private _route:ActivatedRoute
  ) {
    this.user = new User(1,'','','','','','','',[]);
   }

  ngOnInit(): void {
    $('.texto').css('text-decoration','none');
    this.logout();
  }

  public onSubmit(form){
    this._userService.login(this.user).subscribe(
      (response) => {
        if(response.status != 'error'){
          //aqui obtiene el token del usuario
          this.token = response;

          this._userService.login(this.user,true).subscribe(
            (response) => {
                  //obtener el usuario identificado
                  this.identity = response;
                  console.log(this.token);
                  console.log(this.identity);

                  this.router.navigate(['/super-admin']);
                  localStorage.setItem('identity',JSON.stringify(this.identity));
                  localStorage.setItem('token',this.token);
            },
            (error) => {
              console.error(<any>error);
            }
          );  
        }else{
          Swal.fire({
            icon: 'error',
            title: '¡Oops...!',
            text: response.message
          })
          form.reset();
        }        
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public logout(){
    this._route.params.subscribe(
       (params) => {
         let logout = +params['sure'];
 
         if(logout == 1){
           localStorage.removeItem('identity');
           localStorage.removeItem('token');
 
           this.identity = null;
           this.token = null;
 
           this.router.navigate(['/login']);
         }
       }
    );
   }


}
