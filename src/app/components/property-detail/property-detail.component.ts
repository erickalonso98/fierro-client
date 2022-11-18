import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { Property } from 'src/app/models/property';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public page_title:string;
  public url:string;
  public property:Property;

  constructor(
    private _propertyService:PropertyService,
    private _route:ActivatedRoute,
    private _router:Router
  ) {
    this.url = global.url;
    this.page_title = 'Detalle del predio ganadero';
   }

  ngOnInit(): void {
    this.getProperty();
  }

  public getProperty(){
    this._route.params.subscribe((params) => {
      let id = +params['id'];
      this._propertyService.getProperty(id).subscribe(
        (response) => {
          if(response.status == 'success'){
            this.property = response.property;
            console.log(this.property);
          }else{
            this._router.navigate(['/property']);
          }
        },
        (error) => {
          console.error(<any>error);
        }
      );
    });
  }

}
