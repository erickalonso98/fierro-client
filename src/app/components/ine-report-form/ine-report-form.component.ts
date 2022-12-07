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

          pdf.header(this.header);
          pdf.footer(this.footer);
          

          this.persona = response.person;
          this.iron = response.person.iron;
          this.property = response.person.property;
          this.state = response.person.state;
          
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
            new Table([
              [new Txt('Nombre').end,new Cell(new Txt(this.persona.name).bold().end).border([false,false]).end],
              [new Txt('Apellido paterno').end,new Cell(new Txt(this.persona.surname).bold().end).border([false,false]).end],
              [new Txt('Apellido materno').end,new Cell(new Txt(this.persona.lastname).bold().end).border([false,false]).end],
              [new Txt('Apellido materno').end,new Cell(new Txt(this.persona.lastname).bold().end).border([false,false]).end],
              [new Txt('Estado').end,new Cell(new Txt(this.state.name).bold().end).border([false,false]).end]
            ]).widths([100, 150]).end
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
