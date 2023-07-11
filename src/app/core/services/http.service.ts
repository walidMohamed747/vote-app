import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable , switchMap,of} from 'rxjs';
import { User } from 'src/app/models/user';
import { postMovie } from 'src/app/models/votings';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public isLogin: boolean = false;
  commonApiUrl = 'https://shacleau.live:8081';

  constructor(private _http: HttpClient , private cookie : CookieService ) { }
  
  uuid = self.crypto.randomUUID();

  accessToken(): string
  {
     return this.cookie.get("token");
  }
  
  login(data:User):Observable<any>{
    
    return this._http.post(`${this.commonApiUrl}/api/user/login`, data).pipe(
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

  addMovies(data :postMovie) :Observable<any>{
    const token = this.cookie.get('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.post(`${this.commonApiUrl}/api/votings` , data,
    {headers:headers});
  }

  addVoteHome():Observable<any>{
    let UID =this.uuid ;
    const headers = new HttpHeaders().set('uuid' , UID )
     return this._http.get(`${this.commonApiUrl}/api/votings/vote/2`,
     {headers:headers})
     ;   
  }
}