import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/models/person';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-rfc-report-form',
  templateUrl: './rfc-report-form.component.html',
  styleUrls: ['./rfc-report-form.component.css']
})
export class RfcReportFormComponent implements OnInit {

  public page_title:string;
  public persona:Person;
  public url:string;

  constructor(
    private _userService:UserService,
    private _personService:PersonService
  ) { 
    this.page_title = 'Reporte x rfc';
    this.persona = new Person(1,1,'','','','','',1,'','','','',1,'','','');
    this.url = global.url;
  }

  ngOnInit(): void {
  }

  public getRfc(rfc){
    this._personService.reporte_rfc(rfc).subscribe(
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
