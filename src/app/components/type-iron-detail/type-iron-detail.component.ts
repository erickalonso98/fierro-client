import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { IronTypeService } from 'src/app/services/iron-type.service';
import { Iron_Type } from 'src/app/models/iron_type';

@Component({
  selector: 'app-type-iron-detail',
  templateUrl: './type-iron-detail.component.html',
  styleUrls: ['./type-iron-detail.component.css']
})
export class TypeIronDetailComponent implements OnInit {

  public page_title:string;
  public iron_type:Iron_Type;

  constructor(
    private _ironTypeService:IronTypeService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.page_title = 'Detalle del tipo de fierro';
  }

  ngOnInit(): void {
    this.getTypeIron();
  }

  public getTypeIron(){
    this._route.params.subscribe((params) => {
      let id = +params['id'];
      this._ironTypeService.getOneIronType(id).subscribe(
        (response) => {
          if(response.status == 'success'){
              this.iron_type = response.type;
              console.log(this.iron_type);
          }else{
            this._router.navigate(['/iron-type']);
          }
        },
        (error) => {
          console.error(<any>error);
        }
      );
    });
  }

}
