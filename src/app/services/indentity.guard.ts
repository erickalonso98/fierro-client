import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable()
export class IndentityGuard implements CanActivate{

    constructor(
        private _userService:UserService,
        private _router:Router
        ){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let identity = this._userService.getIdentity();

        if(identity){
            return true;
        }else{
            this._router.navigate(['/login']);
            return false;
        }
    }
}