import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/models/person';
import { MunicipalitieService } from 'src/app/services/municipalitie.service';
import { LocationService } from 'src/app/services/location.service';
import { StateService } from 'src/app/services/state.service';
import { global } from 'src/app/services/global';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public title_page:string = "Personas";
  public parrafo:string = "Registra al ciudadano para despues registrar el fierro";
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
  public information_person:string = "Información de las personas";
  public roles:string = "Roles de usuario";
  public report:string = "Reportes";

  public status:string;
  public property_iron:string = "Realizar Pago del fierro";
  public parrafoLink:string = "Lograste registrar ala persona con exito ahora puedes";

  public labelname:string = "Nombre";
  public appat:string = "Apellido Paterno";
  public apmat:string = "Apellido Materno";
  public labelTitleproperty:string = "Titulo de la propiedad";
  public labeldescription:string = "Descripción de la persona";
  public labelState:string = "Estado";
  public labelmuni:string = "Municipio";
  public labelLocalidad:string = "Localidad";
  public labelpostal:string = "Codigo Postal";
  public labelCurp:string = "Curp";
  public labelRfc:string = "Rfc";
  public labeline:string = "Ine";
  public labelage:string = "Edad";
  public labelimage:string = "Image de la persona";
  public labelphone:string = "Telefono";
  public labelemail:string = "Correo electronico";

  public EnterPerson:string = "Registrar";
  public listMuni:Array<any> = [];
  public listLocation:Array<any> = [];

  public resetVar:boolean = true;

  public persona:Person;
  public token:any;
  public identity:any;

  public arrayState:Array<any> = [];

  public options_froala: Object = {
    charCounterCount: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  };

  public afuConfig:any = {
    multiple: false,
    formatsAllowed: ".jpg,.png , .gif , .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:global.url+'person/upload',
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
    private _personService:PersonService,
    private _stateService:StateService,
    private _municipalitieService:MunicipalitieService,
    private _locationService:LocationService
  ) {
      this.token = this._userService.getToken();
      this.identity = this._userService.getIdentity();
   }

  ngOnInit(): void {
    this.persona = new Person(1,this.identity.sub,'','','','','',1,'','','','',0,'','','');
    console.log(this.persona);
    this.State();
  }

    public toggleSidebar(){
      this.opened = !this.opened;
    }

  public State(){
    this._stateService.getState().subscribe(
      (response) => {
        this.arrayState = response.state;
        console.log(this.arrayState);
      },
      (error) =>{
        console.error(<any>error);
      }
    );
  }

  public onSubmit(form){
    this._personService.create(this.token,this.persona).subscribe(
      (response) => {
        if(response.status == 'success'){
          console.log(response);
          Swal.fire({
            icon: response.status,
            title: '¡Enhorabuena!',
            text: "Ciudadano Registrado con exito!!"
          })
          this.status = 'success';
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "no se registro el ciudadano correctamente"
          })
          this.status = 'error';
        }

        form.reset();
      },
      (error) => {
        console.error(<any>error);
        this.status = 'error';
      }
    );
  }

  public imageUpload(data:any){
    let dato = data.body;
    this.persona.image = dato.image;
  }

  public getStateMunicipality(state_id){
    this._locationService.StateMunicipality(state_id).subscribe(
      (response) => {
        if(response.status == "success"){
          this.listMuni = response.municipalitie_state;
        }else{
          console.error('error');
        }
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

}
