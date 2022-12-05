import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/models/person';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-name-report-form',
  templateUrl: './name-report-form.component.html',
  styleUrls: ['./name-report-form.component.css']
})
export class NameReportFormComponent implements OnInit {

  public page_title:string;
  public persona:Person;
  public url:string;

  constructor(
    private _personService:PersonService
  ) { 
    this.page_title = 'Reporte x nombre';
    this.persona = new Person(1,1,'','','','','',1,'','','','',1,'','','');
    this.url = global.url;
  }

  ngOnInit(): void {
  }

  public getName(name){
    this._personService.reporte_name(name).subscribe(
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
