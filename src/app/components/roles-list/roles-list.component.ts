import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Roles } from 'src/app/models/roles';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  public datarole:Array<any>
  constructor(private _roleService:RolesService) { }

  ngOnInit(): void {
    this.getRoles();
  }

  public getRoles(){
    this._roleService.getRoles().subscribe(
      (response) => {
        this.datarole = response.roles;
        console.log(this.datarole);
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

}
