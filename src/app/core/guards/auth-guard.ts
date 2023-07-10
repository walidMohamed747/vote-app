import { Injectable } from '@angular/core';
import {
  CanActivate,
  UrlTree,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
// import { environment } from '@env';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { HttpService } from '../services/http.service';
let status;
@Injectable({
  providedIn: 'root',
})
export class AuthGurd implements CanActivate {
  constructor(private route: Router,private cookie: CookieService, private auth: HttpService ) {}

  canActivate(route: ActivatedRouteSnapshot , state:RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.accessToken()) {
      return true;
    }
    this.route.navigate(['auth/login']);
    return false;
    
  }
}
