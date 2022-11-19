import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { TenenciaService } from 'src/app/services/tenencia.service';
import { Tenencia } from 'src/app/models/tenencia';

@Component({
  selector: 'app-tenencia-detail',
  templateUrl: './tenencia-detail.component.html',
  styleUrls: ['./tenencia-detail.component.css']
})
export class TenenciaDetailComponent implements OnInit {

  public tenencia:Tenencia;
  constructor(
    private _tenenciaService:TenenciaService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.getTenenciaOne();
  }

  public getTenenciaOne(){
    this._route.params.subscribe((params) => {
      let id = +params['id'];
      this._tenenciaService.getTenencia(id).subscribe(
        (response) => {
          if(response.status == 'success'){
            this.tenencia = response.tenencia;
            console.log(this.tenencia);
          }else{
            this._router.navigate(['/type-tenencia']);
          }
        },
        (error) => {
          console.error(<any>error);
        }
      );
    });
  }

}
