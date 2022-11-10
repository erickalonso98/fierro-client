import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { UserService } from 'src/app/services/user.service';
import { Person } from 'src/app/models/person';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  public url:string;
  public personData:Array<Person> = [];
  public options:string = "Opciones";
  public token:any;
  public identity:any;

  constructor(
    private _personService:PersonService,
    private _userService:UserService
    ) { 
    this.url = global.url;
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(): void {
    this.getPerson();
  }

  public getPerson(){
    this._personService.getPersons().subscribe(
      (response) => {
        this.personData = response.persons;
        console.log(this.personData);
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

  public deletePerson(id){
    this._personService.delete(this.token,id).subscribe(
      (response) => {
        this.getPerson();
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

}
