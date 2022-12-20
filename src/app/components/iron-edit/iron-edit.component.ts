import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { IronService } from 'src/app/services/iron.service';
import { UserService } from 'src/app/services/user.service';
import { PersonService } from 'src/app/services/person.service';
import { IronTypeService } from 'src/app/services/iron-type.service';
import { HighService } from 'src/app/services/high.service';
import { global } from 'src/app/services/global';
import { Iron } from 'src/app/models/iron';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iron-edit',
  templateUrl: './iron-edit.component.html',
  styleUrls: ['./iron-edit.component.css']
})
export class IronEditComponent implements OnInit {

  public page_title:string;
  public is_edit:boolean;
  public url:string;
  public iron:Iron;
  public token:any;
  public identity:any;
  public resetVar:boolean = true;
  public opened:boolean = false;
  public Arrayperson:Array<any> = [];
  public ArrayironType:Array<any> = [];
  public Arrayhigh:Array<any> = [];

  public open:string = "Abrir Menu";
  public menu:string = "Menú";
  public cerrar:string = "Cerrar";
  public person:string = "Personas";
  public property:string = "Predial";
  public fierro:string = "Fierro";
  public exploitation:string = "Tipo de explotación";
  public tenencia:string = "Tipo de tenencia de la tierra";
  public type_iron:string = "Tipo de fierro";
  public users:string = "Usuarios";
  public roles:string = "Roles de usuarios";
  public report:string = "Reporte x Ine";

  public afuConfig:any = {
    multiple: false,
    formatsAllowed: ".jpg,.png , .gif , .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:global.url+'iron/upload',
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

  constructor(
    private _userService:UserService,
    private _ironService:IronService,
    private _personService:PersonService,
    private _ironTypeService:IronTypeService,
    private _highService:HighService,
    private _route:ActivatedRoute,
    private _router:Router
  ) {
    this.page_title = 'Editar fierro';
    this.iron = new Iron(1,1,1,1,'','','',0,0,'',0,'','');
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
    this.url = global.url;
    this.is_edit = true;
   }

  ngOnInit(): void {
    this.getIron();
    this.getPersons();
    this.getTypeIron();
    this.getHigh();
  }

  public getPersons(){
    this._personService.getPersons().subscribe(
      (response) => {
        if(response.status == 'success'){
          this.Arrayperson = response.persons;
          console.log(this.Arrayperson);
        }
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public getTypeIron(){
    this._ironTypeService.getIronType().subscribe(
      (response) => {
        if(response.status == 'success'){
          this.ArrayironType = response.types_iron;
          console.log(this.ArrayironType);
        }
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public onSubmit(form){
    this._ironService.update(this.token,this.iron,this.iron.id).subscribe(
      (response) => {
        if(response.status == 'success'){
          console.log(response);
          Swal.fire({
            icon: response.status,
            title: '¡Enhorabuena!',
            text: "El fierro Revalidado de la persona con exito!!"
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "no se modifico el fierro de la persona correctamente"
          })
        }
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public getHigh(){
    this._highService.getHighs().subscribe(
      (response) => {
        if(response.status == 'success'){
          this.Arrayhigh = response.highs;
          console.log(this.Arrayhigh);
        }
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public getIron(){
    this._route.params.subscribe((params) => {
      let id = +params['id'];
      this._ironService.getIron(id).subscribe(
        (response) => {
          if(response.status == 'success'){
            this.iron = response.iron;
            console.log(this.iron);
          }else{
            this._router.navigate(['/iron']);
          }
        },
        (error) => {
          console.error(<any>error);
        }
      );
    });
  }

  public imageUpload(data:any){
    let dato = data.body;
    this.iron.image = dato.image;
  }

  public toggleSidebar() {
    this.opened = !this.opened;
  }

}
