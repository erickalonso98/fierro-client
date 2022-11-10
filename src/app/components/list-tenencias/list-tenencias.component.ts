import { Component, OnInit } from '@angular/core';
import { TenenciaService } from 'src/app/services/tenencia.service';

@Component({
  selector: 'app-list-tenencias',
  templateUrl: './list-tenencias.component.html',
  styleUrls: ['./list-tenencias.component.css']
})
export class ListTenenciasComponent implements OnInit {
  public tenencias:any[] = [];
  constructor(
    private _tenenciaService:TenenciaService
  ) { }

  ngOnInit(): void {
    this.obtenerTenencias();
  }

  public obtenerTenencias(){
    this._tenenciaService.getTypeTenencias().subscribe(
      (response) => {
        this.tenencias = response.tenencias;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
