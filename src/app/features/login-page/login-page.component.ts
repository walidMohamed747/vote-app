import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  msg = '';
  isSubmitted = false;
  loginForm !: FormGroup;
  @Input() error!: string | null;

  constructor(private auth: HttpService, private _router: Router, private cookie :CookieService , private fb: FormBuilder , ) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });  }
  
   onSubmit(){
    // console.log("cccccccccccccc",this.loginForm.value)
    this.auth.login(this.loginForm.value).subscribe(res=>
      {
        if(res){
          this._router.navigateByUrl('')
        }
      })
   }
   signIn(){
    if(this.loginForm.invalid){
      return ;
    }
    this.loginForm.disable;
    this.auth.login(this.loginForm.value).subscribe(res=>
      {
        if(res){
          this._router.navigateByUrl('')
        }
      })   }

   get f(){
    return this.loginForm.controls
   }
  
  }

