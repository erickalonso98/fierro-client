import { Component, OnInit } from '@angular/core';
import { IronService } from 'src/app/services/iron.service';
import { Iron } from 'src/app/models/iron';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-list-fierro',
  templateUrl: './list-fierro.component.html',
  styleUrls: ['./list-fierro.component.css']
})
export class ListFierroComponent implements OnInit {

  public dataIron:Array<Iron>;
  public url:string;
  constructor(private _ironService:IronService) { 
    this.url = global.url;
  }

  ngOnInit(): void {
    this.getIrons();
  }

  public getIrons(){
    this._ironService.getIrons().subscribe(
      (response) => {
        this.dataIron = response.irons;
        console.log(this.dataIron);
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

}
