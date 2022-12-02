import { Component, OnInit } from '@angular/core';
import { Img, PdfMakeWrapper,Txt ,IImg} from 'pdfmake-wrapper';
import { PersonService } from 'src/app/services/person.service';
import { UserService } from 'src/app/services/user.service';
import { Person } from 'src/app/models/person';
import { Iron } from 'src/app/models/iron';
import { Property } from 'src/app/models/property';
import { global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ine-report-form',
  templateUrl: './ine-report-form.component.html',
  styleUrls: ['./ine-report-form.component.css']
})
export class IneReportFormComponent implements OnInit {

  public url:string;
  public persona:Person;
  public iron:Iron;
  public property:Property;
  public dataPerson:any;
  public header:string;
  public title_person:string;
  public footer:string;
  public brand_agua:string;

  constructor(
    private userService:UserService,
    private personService:PersonService
  ) {
    this.url = global.url;
    this.persona = new Person(1,1,'','','','','',1,'','','','',1,'','','');
    this.header = 'Secretaria del ayuntamiento de macuspana, Coordinacion de ventanilla unica de registro de fierro ganadero';
    this.title_person = 'Credencial de registro de fierro ganadero';
    this.footer = 'Lic. Sergio de la Cruz Olan';
    this.brand_agua = 'Ayuntamiento de macuspana';
   }

  ngOnInit(): void {
  }

  public generateTestPDF(){
    const pdf = new PdfMakeWrapper();

    pdf.add(
      new Txt('Hello world').bold().italics().end
    );

    pdf.create().open();
  }

  public getIne(ine){
    this.personService.reporte_ine(ine).subscribe(
      (response) => {
        if(response.status == 'success'){

          console.log(response);
          
          const pdf = new PdfMakeWrapper();

          pdf.header(this.header);
          pdf.footer(this.footer);
          

          this.persona = response.person;
          this.iron = response.person.iron;
          this.property = response.person.property;

          
          new Img(this.url+'property/image/'+this.property.image).fit([100,100]).build().then((img:IImg) => {
            pdf.add(img);
          });

          new Img(this.url+'iron/image/'+this.iron.image).fit([100,100]).build().then((img:IImg) => {
            pdf.add(img);
          });

          new Img (this.url+'person/image/'+this.persona.image).fit([100,100]).build().then((img:IImg) => {
            pdf.add(img);
            pdf.create().open();
          });

          pdf.add([
            new Txt('id:'+response.person.id).alignment('center').bold().italics().end,
            new Txt('Nombre:'+response.person.name).alignment('center').bold().italics().end,
            new Txt('Apellido paterno:'+response.person.surname).alignment('center').bold().italics().end,
            new Txt('Apellido materno:'+response.person.lastname).alignment('center').bold().italics().end,
            new Txt('Codigo postal:'+response.person.code_postal).alignment('center').bold().italics().end,
            new Txt('Curp:'+response.person.curp).alignment('center').bold().italics().end,
            new Txt('Rfc:'+response.person.rfc).alignment('center').bold().italics().end,
            new Txt('Ine:'+response.person.ine).alignment('center').bold().italics().end,
            new Txt('Edad:'+response.person.age).alignment('center').bold().italics().end,
            new Txt('Telefono:'+response.person.phone).alignment('center').bold().italics().end,
            new Txt('Correo Electronico:'+response.person.email).alignment('center').bold().italics().end,
          ]);

          //pdf.create().open();
          
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "No se logro Generar el reporte"
          })
        }
      },
      (error) => {
        console.error(<any>error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "No se logro Generar el reporte"
        })
      }
    );
  }
  

}
