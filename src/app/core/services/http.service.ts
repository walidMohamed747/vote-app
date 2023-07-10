import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable , switchMap,of} from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public isLogin: boolean = false;

  commonApiUrl = 'https://776bff8b-2cf7-4d1d-96ba-f9c8f28e6492.mock.pstmn.io/';

  constructor(private _http: HttpClient , private cookie : CookieService ) { }
  
  accessToken(): string
  {
     return this.cookie.get("token");
  }
  
  login(data:User):Observable<any>{
    
    return this._http.post(`${this.commonApiUrl}api/user/login`, data).pipe(
      switchMap((res:any)=>{
        this.cookie.set("token",res.access_token )
        this.cookie.set("username",data.username )
        this.cookie.set("password",data.password )
        res.access_token
          console.log("res")
       return of(true)
    })
    );
  }

  getVotings(): Observable<any> {
    return this._http.get(`${this.commonApiUrl}/api/votings/getAll`)
  }

  getHomePage():Observable<any>{
    return this._http.get(`${this.commonApiUrl}/api/votings/homepage`)
  }
}
