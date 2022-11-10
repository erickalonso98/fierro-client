import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HighService } from 'src/app/services/high.service';
import { High } from 'src/app/models/high';
import { Router,ActivatedRoute,Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-high-alta',
  templateUrl: './high-alta.component.html',
  styleUrls: ['./high-alta.component.css']
})
export class HighAltaComponent implements OnInit {

  public labelNum:string = "Numero de Fierro";
  public labelMonto:string = "Monto";
  public accept:string = "Aceptar";
  public cancel:string = "Cancelar";
  public title_page:string;
  public high:High;
  public token:any;
  public identity:any;

  constructor(
    private _userService:UserService,
    private _highService:HighService,
    private _router:Router
  ) {
    this.title_page = "Pago de alta de fierro";
    this.high = new High(1,'',0);

    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
   }

  ngOnInit(): void {
  }

  public onSubmit(form){
    this._highService.create(this.token,this.high).subscribe(
      (response) => {
        if(response.status == 'success'){
          this._router.navigate(['/property-iron']);
        }
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

}
