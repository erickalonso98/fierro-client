import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public dataArray:Array<any>;
  public url:string;
  constructor(private _userService:UserService) { 
    this.url = global.url;
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  public getUsuarios(){
    this._userService.getUsers().subscribe(
      (response)=>{
        if(response.status == "success"){
           this.dataArray = response.user;
           console.log(this.dataArray);
        }
      },
      (error)=>{
        console.error(error);
      }
    );
  }

}
