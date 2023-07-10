import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpService } from '../services/http.service';
import { CookieService } from 'ngx-cookie-service';
// export let userDetails: UserDetails;
let status;
@Injectable({
  providedIn: 'root',
})
export class IsLogged implements CanActivate {
  constructor(private route: Router, private _auth: HttpService , private cookie : CookieService) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!!this.cookie.get("token")) {
      return true;
    } else {
      this.route.navigateByUrl("/auth/login")
      return false;
    }
  }
}
