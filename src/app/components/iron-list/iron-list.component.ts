import { Component, OnInit } from '@angular/core';
import { IronTypeService } from 'src/app/services/iron-type.service';

@Component({
  selector: 'app-iron-list',
  templateUrl: './iron-list.component.html',
  styleUrls: ['./iron-list.component.css']
})
export class IronListComponent implements OnInit {

  public listTypeiron:any[];

  constructor(
    private _irontypeService:IronTypeService
  ) { }

  ngOnInit(): void {
    this.getTypesirons();
  }

  public getTypesirons(){
    this._irontypeService.getIronType().subscribe(
      (response) => {
        this.listTypeiron = response.types_iron;
        console.log(this.listTypeiron);
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

}
