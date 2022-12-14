import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PersonService } from 'src/app/services/person.service';
import { PropertyService } from 'src/app/services/property.service';
import { TenenciaService } from 'src/app/services/tenencia.service';
import { ExploitationService } from 'src/app/services/exploitation.service';
import { global } from 'src/app/services/global';
import { Property } from 'src/app/models/property';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {

  public opened:boolean = false;
  public open:string = "Abrir Menu";
  public menu:string = "Menú";
  public cerrar:string = "Cerrar";
  public person:string = "Personas";
  public propertys:string = "Predial";
  public iron:string = "Fierro";
  public exploitation:string = "Tipo de explotación";
  public tenencia:string = "Tipo de tenencia de la tierra";
  public type_iron:string = "Tipo de fierro";
  public users:string = "Usuarios";
  public roles:string = "Roles de usuarios";
  public report:string = "Reportes";

  public page_title:string;
  public url:string;
  public property:Property;
  public token:any;
  public identity:any;

  public resetVar:boolean = true;
  public is_edit:boolean;

  public ArrayPerson:Array<any> = [];
  public ArrayTenencia:Array<any> = [];
  public ArrayExploitation:Array<any> = [];

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
    private _userService:UserService,
    private _personService:PersonService,
    private _propertyService:PropertyService,
    private _tenenciaService:TenenciaService,
    private _exploitationService:ExploitationService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.page_title = 'Editar predio';
    this.url = global.url;
    this.property = new Property(1,'',1,1,1,'','','',new Date,'');
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
    this.is_edit = true;
   }

  ngOnInit(): void {
    this.getProperty();
    this.getPerson();
    this.getTenencia();
    this.getExplotation();
  }

  public getPerson(){
    this._personService.getPersons().subscribe(
      (response) => {
        this.ArrayPerson = response.persons;
        console.log(this.ArrayPerson);
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public getTenencia(){
    this._tenenciaService.getTypeTenencias().subscribe(
      (response) => {
        this.ArrayTenencia = response.tenencias;
        console.log(this.ArrayTenencia);
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public getExplotation(){
    this._exploitationService.getExploitation().subscribe(
      (response) => {
        this.ArrayExploitation = response.exploitations;
        console.log(this.ArrayExploitation);
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public onSubmit(form){
    this._propertyService.update(this.token,this.property,this.property.id).subscribe(
      (response) => {
        if(response.status == 'success'){
          console.log(response);

          Swal.fire({
            icon: response.status,
            title: '¡Enhorabuena!',
            text: "El predio Modificado de la persona con exito!!"
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

  public getProperty(){
    this._route.params.subscribe((params) => {
      let id = +params['id'];
      this._propertyService.getProperty(id).subscribe(
        (response) => {
          if(response.status == 'success'){
            this.property = response.property;
            console.log(this.property);
          }else{
            this._router.navigate(['/property']);
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
    this.property.image = dato.image;
  }

  public toggleSidebar() {
    this.opened = !this.opened;
  }

}
