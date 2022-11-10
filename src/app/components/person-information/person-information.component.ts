import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-information',
  templateUrl: './person-information.component.html',
  styleUrls: ['./person-information.component.css']
})
export class PersonInformationComponent implements OnInit {

  public title_page:string = "Información de la persona";
  public parrafo:string = "Esta tabla es para mostrar las personas dados de alta";
  public opened:boolean = false;
  public open:string = "Abrir Menu";
  public menu:string = "Menú";
  public cerrar:string = "Cerrar";
  public person:string = "Personas";
  public property:string = "Predial";
  public iron:string = "Fierro";
  public exploitation:string = "Tipo de explotación";
  public tenencia:string = "Tipo de tenencia de la tierra";
  public type_iron:string = "Tipo de fierro";
  public users:string = "Usuarios";

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSidebar(){
    this.opened = !this.opened;
  }

}
