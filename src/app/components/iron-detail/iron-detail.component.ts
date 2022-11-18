import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { IronService } from 'src/app/services/iron.service';
import { Iron } from 'src/app/models/iron';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-iron-detail',
  templateUrl: './iron-detail.component.html',
  styleUrls: ['./iron-detail.component.css']
})
export class IronDetailComponent implements OnInit {

  public url:string;
  public iron:Iron;
  public page_title:string;

  constructor(
    private _ironService:IronService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.page_title = 'Detalle del Fierro';
    this.url = global.url;
  }

  ngOnInit(): void {
    this.getIron();
  }

  public getIron(){
    this._route.params.subscribe((params) => {
      let id = +params['id'];
      this._ironService.getIron(id).subscribe(
        (response) => {
          if(response.status == 'success'){
            this.iron = response.iron;
            console.log(this.iron);
          }else{
            this._router.navigate(['/iron']);
          }
        },
        (error) => {
          console.error(<any>error);
        }
      );

    });
  }

}
