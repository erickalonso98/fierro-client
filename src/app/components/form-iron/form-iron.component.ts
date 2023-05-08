import { Component, OnInit } from '@angular/core';
import { IronService } from 'src/app/services/iron.service';
import { PersonService } from 'src/app/services/person.service';
import { UserService } from 'src/app/services/user.service';
import { IronTypeService } from 'src/app/services/iron-type.service';
import { Iron } from 'src/app/models/iron';
import { global } from 'src/app/services/global';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import { HighService } from 'src/app/services/high.service';

@Component({
  selector: 'app-form-iron',
  templateUrl: './form-iron.component.html',
  styleUrls: ['./form-iron.component.css']
})
export class FormIronComponent implements OnInit {

  public title_page:string;
  public parrafo:string;
  public url:string;
  public iron:Iron;
  public personArray:Array<any> = [];
  public irontype:Array<any> = [];
  public highArray:Array<any> = [];
  public resetVar:boolean = true;

  public labelperson:string = "Persona";
  public labeltypeIron:string = "Tipo de fierro";
  public labelhighIron:string = "Pago del alta de fierro";
  public labelName:string = "Nombre del fierro";
  public labelnumFierro:string = "Numero de fierro";
  public labelbrand:string = "Marca";
  public labelnumlibrary:string = "Numero de libro";
  public labelnumfoja:string = "Numero de foja del libro";
  public labelimage:string = "Imagen del fierro";
  public labelyear:string = "Año del fierro";
  public labelvalidity:string = "Validez del fierro";
  public limit:string = "Vigencia del fierro";
  public EnterIron:string = "Registrar";

  public token:any;
  public identity:any;
  public is_register:boolean;

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
    private _ironService:IronService,
    private _personService:PersonService,
    private _userService:UserService,
    private _ironTypeService:IronTypeService,
    private _highService:HighService
  ) { 
    this.title_page = "Registrar Fierro";
    this.parrafo = "Registre el fierro de la persona";
    this.iron = new Iron(1,1,1,1,'','','',0,0,'',0,'','');
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
    this.url = global.url;
    this.is_register = true;
  }

  ngOnInit(): void {
    this.getPersons();
    this.getTypeIrons();
    this.getHigh();
  }

  public getPersons(){
    this._personService.getPersons().subscribe(
      (response) => {
        this.personArray = response.persons;
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public getTypeIrons(){
    this._ironTypeService.getIronType().subscribe(
      (response) => {
        this.irontype = response.types_iron;
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public getHigh(){
    this._highService.getHighs().subscribe(
      (response) => {
        this.highArray = response.highs;
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public onSubmit(form){
    this._ironService.create(this.token,this.iron).subscribe(
      (response) => {
        if(response.status == 'success'){
          console.log(response);
          Swal.fire({
            icon: response.status,
            title: '¡Enhorabuena!',
            text: "El fierro Registrado de la persona con exito!!"
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "no se registro el fierro de la persona correctamente"
          })
        }

        form.reset();
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public imageUpload(data:any){
    let dato = data.body;
    this.iron.image = dato.image;
  }

}
