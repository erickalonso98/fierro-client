import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-iron',
  templateUrl: './property-iron.component.html',
  styleUrls: ['./property-iron.component.css']
})
export class PropertyIronComponent implements OnInit {

  public title_page:string;
  public linkAd:string = "Regresar ala pagina principal";
  constructor() { }

  ngOnInit(): void {
  }

}
