import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  private _router =inject(Router)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //LoggedInUserRole  = localstorage
      let loggedInUserRole =localStorage.getItem('userRole') as string
      // console.log(loggedInUserRole,route.data['userRoles'])
      //UserRoleArr []
      let userArr :Array<string> = route.data['userRoles']

      if(userArr.includes(loggedInUserRole)){
        return true;
      }else{
        const UrlTree : UrlTree = this._router.createUrlTree(['home'])
        return UrlTree
      }
    
  }
  
}
