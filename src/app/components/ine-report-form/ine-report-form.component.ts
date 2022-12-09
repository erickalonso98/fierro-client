import { Component, OnInit } from '@angular/core';
import { Img, PdfMakeWrapper,Txt ,IImg,Table,Cell} from 'pdfmake-wrapper';
import { PersonService } from 'src/app/services/person.service';
import { UserService } from 'src/app/services/user.service';
import { Person } from 'src/app/models/person';
import { Iron } from 'src/app/models/iron';
import { Property } from 'src/app/models/property';
import { State } from 'src/app/models/state';
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
  public state:State;
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

          this.persona = response.person;
          this.iron = response.person.iron;
          this.property = response.person.property;
          this.state = response.person.state;

          new Img(this.url+'property/image/'+this.property.image).fit([200,150]).absolutePosition(340,630).build().then((img:IImg) => {
            pdf.add(img);
            });

          new Img(this.url+'iron/image/'+this.iron.image).fit([200,150]).absolutePosition(350,400).build().then((img:IImg) => {
            pdf.add(img);
          });

          new Img (this.url+'person/image/'+this.persona.image).fit([300,200]).absolutePosition(350,95).build().then((img:IImg) => {
            pdf.add(img);
            pdf.create().open();
          });

          /*
           pdf.info({
            title: 'A document',
            author: 'pdfmake-wrapper',
            subject: 'subject of document'
          });*/

          pdf.add([
            new Table([
              [new Cell(new Txt('Información de la persona').alignment('center').color('#fff').bold().end).fillColor('#0997bd').border([false,true]).end]
            ]).widths([500,150]).end,
            new Table([
              [new Cell(new Txt('Id').bold().end).border([false,true]).end,new Cell(new Txt(response.person.id).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Nombre').bold().end).border([false,true]).end,new Cell(new Txt(this.persona.name).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Apellido paterno').bold().end).border([false,true]).end,new Cell(new Txt(this.persona.surname).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Apellido materno').bold().end).border([false,true]).end,new Cell(new Txt(this.persona.lastname).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Estado').bold().end).border([false,true]).end,new Cell(new Txt(this.state.name).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Cod.postal').bold().end).border([false,true]).end,new Cell(new Txt(this.persona.code_postal).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Curp').bold().end).border([false,true]).end,new Cell(new Txt(this.persona.curp).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('rfc').bold().end).border([false,true]).end,new Cell(new Txt(this.persona.rfc).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Ine').bold().end).border([false,true]).end,new Cell(new Txt(this.persona.ine).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Edad').bold().end).border([false,true]).end,new Cell(new Txt(response.person.age).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Telefono').bold().end).border([false,true]).end,new Cell(new Txt(this.persona.phone).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Correo').bold().end).border([false,true]).end,new Cell(new Txt(this.persona.email).alignment('center').bold().end).border([false,true]).end]
            ]).widths([100, 150]).heights(20).end,
            new Table([
              [new Cell(new Txt('Información del fierro').alignment('center').color('#fff').bold().end).fillColor('#0997bd').border([false,true]).end]
            ]).widths([500,150]).end,
            new Table([
              [new Cell(new Txt('Id').bold().end).border([false,true]).end,new Cell(new Txt(response.person.iron.id).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Nombre').bold().end).border([false,true]).end,new Cell(new Txt(this.iron.name).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Num.Fierro').bold().end).border([false,true]).end,new Cell(new Txt(this.iron.num_iron).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Marca').bold().end).border([false,true]).end,new Cell(new Txt(this.iron.brand).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Num.libro').bold().end).border([false,true]).end,new Cell(new Txt(response.person.iron.num_library).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Num.foja').bold().end).border([false,true]).end,new Cell(new Txt(response.person.iron.num_foja).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Año').bold().end).border([false,true]).end,new Cell(new Txt(response.person.iron.year).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Vigencia').bold().end).border([false,true]).end,new Cell(new Txt(this.iron.validity).alignment('center').bold().end).border([false,true]).end],
              [new Cell(new Txt('Limite').bold().end).border([false,true]).end,new Cell(new Txt(this.iron.limite).alignment('center').bold().end).border([false,true]).end]
              ]).widths([100,150]).heights(20).end,
              new Table([
                [new Cell(new Txt('Información del predio').alignment('center').color('#fff').bold().end).fillColor('#0997bd').border([false,true]).end]
              ]).widths([500,150]).end,
              new Table([
                [new Cell(new Txt('Id').bold().end).border([false,true]).end,new Cell(new Txt(response.person.property.id).alignment('center').bold().end).border([false,true]).end],
                [new Cell(new Txt('Nombre').bold().end).border([false,true]).end,new Cell(new Txt(this.property.name).alignment('center').bold().end).border([false,true]).end],
                [new Cell(new Txt('Num.parcelas').bold().end).border([false,true]).end,new Cell(new Txt(this.property.num_parcelas).alignment('center').bold().end).border([false,true]).end],
                [new Cell(new Txt('Tipo.superficie').bold().end).border([false,true]).end,new Cell(new Txt(this.property.type_superficie).alignment('center').bold().end).border([false,true]).end]
              ]).widths([100,150]).heights(20).end
          ]);

         // pdf.create().open();
          
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
