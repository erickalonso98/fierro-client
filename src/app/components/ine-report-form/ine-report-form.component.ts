import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper,Txt } from 'pdfmake-wrapper';
import { PersonService } from 'src/app/services/person.service';
import { UserService } from 'src/app/services/user.service';
import { Person } from 'src/app/models/person';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ine-report-form',
  templateUrl: './ine-report-form.component.html',
  styleUrls: ['./ine-report-form.component.css']
})
export class IneReportFormComponent implements OnInit {

  public persona:Person;
  public dataPerson:any;

  constructor(
    private userService:UserService,
    private personService:PersonService
  ) {
    this.persona = new Person(1,1,'','','','','',1,'','','','',1,'','','');
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
          const pdf = new PdfMakeWrapper();
          pdf.add(
            new Txt(response.person.name).alignment('center').bold().italics().end
          );

          pdf.add(
            new Txt(response.person.surname).alignment('center').bold().italics().end
          );

          pdf.add(
            new Txt(response.person.lastname).alignment('center').bold().italics().end
          );

          pdf.add(
            new Txt(response.person.age).alignment('center').bold().italics().end
          );

          pdf.create().open();
          
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
      }
    );
  }
  

}
