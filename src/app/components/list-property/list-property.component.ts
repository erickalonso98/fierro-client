import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.css']
})
export class ListPropertyComponent implements OnInit {

  public url:string;
  public dataProperty:Array<any>;
  constructor(private _propertyService:PropertyService) { 
    this.url = global.url;
  }

  ngOnInit(): void {
    this.getPropertys();
  }

  public getPropertys(){
    this._propertyService.getPropertys().subscribe(
      (response) => {
        this.dataProperty = response.propertys;
        console.log(this.dataProperty);
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

}
