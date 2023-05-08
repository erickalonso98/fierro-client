import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  public foot_page:string;

  constructor() {
    this.foot_page = 'Erick de Jesús Alonso Ángel';
   }

  ngOnInit(): void {
  }

}
