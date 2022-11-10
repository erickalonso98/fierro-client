import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/models/person';
import { Iron } from 'src/app/models/iron';
import { Property } from 'src/app/models/property';
import { State } from 'src/app/models/state';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  public person:any;
  public iron:Iron;
  public property:Property;
  public state:State;
  public url:string;
  public informations:string = "Información de la persona";
  public textiron:string = "Fierro";
  public textproperty:string = "Predio";
  constructor(
    private _personService:PersonService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.url = global.url;
  }

  ngOnInit(): void {
    this.getPerson();
  }

  public getPerson(){
    //sacar el id de la persona
    this._route.params.subscribe((params)=>{
      let id  = +params['id'];
      //peticion ajax para sacar el id los datos de la persona
      this._personService.getPerson(id).subscribe(
        (response) => {
          if(response.status == 'success'){
            this.person = response.person
            this.iron = response.person.iron;
            this.property = response.person.property;
            this.state = response.person.state;
            console.log(this.person);
          }else{
            this._router.navigate(['/list-person-information']);
          }
        },
        (error) => {
          console.error(<any>error);
          this._router.navigate(['/list-person-information']);
        }
      );

    });

    
  }

}
