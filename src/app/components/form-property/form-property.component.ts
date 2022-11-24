import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { UserService } from 'src/app/services/user.service';
import { Property } from 'src/app/models/property';
import { PersonService } from 'src/app/services/person.service';
import { ExploitationService } from 'src/app/services/exploitation.service';
import { TenenciaService } from 'src/app/services/tenencia.service';
import { global } from 'src/app/services/global';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-property',
  templateUrl: './form-property.component.html',
  styleUrls: ['./form-property.component.css']
})
export class FormPropertyComponent implements OnInit {

  public labelpredio:string = "Nombre del predio";
  public labelPerson:string = "Nombre de la persona";
  public labelexploitation:string = "Tipo de explotación de la tierra";
  public labeltenencia:string = "Tipo de tenencia de la tierra";
  public labelimage:string = "Imagen del predio";
  public labeldescription:string = "Descripción";
  public labelparcelas:string = "Numero de parcelas";
  public labelpadron:string = "Alta padron";
  public labeltypesuperficie:string = "Tipo de superficie";
  public Enter:string = "Registrar";

  public resetVar:boolean = true;

  public title_page:string;
  public parrafo:string;
  public property:Property
  public personsArray:Array<any> = [];
  public exploitationsArray:Array<any> = [];
  public tenenciaArray:Array<any> = [];

  public token:any;
  public identity:any;
  public url:string;
  public is_register:boolean;

  public afuConfig:any = {
    multiple: false,
    formatsAllowed: ".jpg,.png , .gif , .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:global.url+'property/upload',
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
    private _propertyService:PropertyService,
    private _userService:UserService,
    private _personService:PersonService,
    private _exploitationService:ExploitationService,
    private _tenenciaService:TenenciaService
  ) {
    this.title_page = "Registrar el predio";
    this.parrafo = "Registre el predio de la persona";
    this.property = new Property(1,'',1,1,1,'','','',new Date,'');
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
    this.url = global.url;
    this.is_register = true;
   }

  ngOnInit(): void {
    this.getPersons();
    this.getExploitations();
    this.getTenencias();
  }

  public getPersons(){
    this._personService.getPersons().subscribe(
      (response) => {
        this.personsArray = response.persons;
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public getExploitations(){
    this._exploitationService.getExploitation().subscribe(
      (response) => {
        this.exploitationsArray = response.exploitations;
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public getTenencias(){
    this._tenenciaService.getTypeTenencias().subscribe(
      (response) => {
        this.tenenciaArray = response.tenencias;
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public onSubmit(form){
    this._propertyService.create(this.token,this.property).subscribe(
      (response) => {
        if(response.status == 'success'){
          console.log(response);
          Swal.fire({
            icon: response.status,
            title: '¡Enhorabuena!',
            text: "el Predio de la persona Registrado con exito!!"
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "no se registro el predio de la correctamente"
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
    this.property.image = dato.image;
  }

}
