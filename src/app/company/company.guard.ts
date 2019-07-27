import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable()
export class CompanyGuard implements CanActivate {
    constructor(private authSvc: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // return this.authSvc.isAdmin('yaptevsa').toPromise().then(res => {
        //     console.log(res.toString());
        //     return <Number>res == 1;
        //
        // });
        return this.authSvc.isAdmin();
    }
}