import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as $ from 'jquery';

@Component({
  selector: 'app-time-menu',
  templateUrl: './time-menu.component.html',
  styleUrls: ['./time-menu.component.css']
})
export class TimeMenuComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    moment.locale('es');
    this.setTime();
  }

  public setTime(){
    setInterval(()=>{
      const reloj = moment().format("MMMM Do YYYY,hh:mm:ss a");
      $('#reloj').html(reloj);
    },1000)
  }

}
