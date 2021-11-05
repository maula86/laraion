import { AuthsService } from './../services/auths.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate {

  constructor(private router: Router, private authService: AuthsService ){}
  
  canActivate(): boolean | Observable<boolean> | Promise<boolean>
  {
    return this.authService.getToken().then(() => {
      const Useraktif = this.authService.isLoggedIn;
      if(Useraktif) {
        return true;
      }
      else{
        this.router.navigate(['landing']);
        return false
      }
    });
  }
  // tslint:disable-next-line: no-trailing-whitespace
  
}
