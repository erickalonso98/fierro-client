import { Component, OnInit } from '@angular/core';
import { HighService } from 'src/app/services/high.service';


@Component({
  selector: 'app-list-high-pay',
  templateUrl: './list-high-pay.component.html',
  styleUrls: ['./list-high-pay.component.css']
})
export class ListHighPayComponent implements OnInit {

  public title_high:string;  
  public ArrayHigh:Array<any> = [];

  constructor(private _highService:HighService) { 
    this.title_high = 'Lista de pagos de alta de fierro';
  }

  ngOnInit(): void {
    this.getHighPay();
  }

  public getHighPay(){
    this._highService.getHighs().subscribe(
      (response) => {
        if(response.status == 'success'){
          this.ArrayHigh = response.highs;
          console.log(this.ArrayHigh);
        }
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

}
