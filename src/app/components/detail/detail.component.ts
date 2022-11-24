import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { global } from 'src/app/services/global';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public page_title:string;
  public user:User;
  public url:string;
  public identity:any;
  public token:any;

  constructor(
    private _userService:UserService,
    private _route:ActivatedRoute,
    private _router:Router
  ) {
    this.page_title = 'Detalle de perfil del usuario';
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
    this.getProfile();
  }

  public getProfile(){
    this._route.params.subscribe((params)=>{
      let userId = +params['id'];
      this.getUser(userId);
    });
  }

  public getUser(userId){
    this._userService.profile(userId).subscribe(
      (response) => {
        if(response.status == 'success'){
          this.user = response.user;
          console.log(this.user);
        }
      },
      (error) => {
        console.error(<any>error);
      }
    );
  }

}
