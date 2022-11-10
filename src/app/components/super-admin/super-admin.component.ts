import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  public title:string = "Bienvenido Administrador";
  
  constructor(
    private _userService:UserService,
    private router:Router,
    private _ActiveRouter:ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
  }

}
