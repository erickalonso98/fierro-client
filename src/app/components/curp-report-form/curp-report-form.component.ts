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
  selector: 'app-curp-report-form',
  templateUrl: './curp-report-form.component.html',
  styleUrls: ['./curp-report-form.component.css']
})
export class CurpReportFormComponent implements OnInit {

  public url:string;
  public page_title:string;
  public persona:Person;

  constructor(
    private _userService:UserService,
    private _personService:PersonService
  ) {
    this.page_title = 'Reporte x Curp';
    this.url = global.url;
    this.persona = new Person(1,1,'','','','','',1,'','','','',1,'','','');
   }

  ngOnInit(): void {
  }

  public getCurp(curp){
    this._personService.reporte_curp(curp).subscribe(
      (response) => {
        if(response.status == 'success'){
          console.log(response);
        }
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

}
