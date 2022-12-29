import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-high',
  templateUrl: './pay-high.component.html',
  styleUrls: ['./pay-high.component.css']
})
export class PayHighComponent implements OnInit {

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
  public roles:string = "Roles de usuarios";
  public report:string = "Reporte x Ine";

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSidebar() {
    this.opened = !this.opened;
  }

}
