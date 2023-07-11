import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AuthGurd } from './core/guards/auth-guard';
import { HttpService } from './core/services/http.service';
import { UserComponent } from './features/user/user.component';
import { AddVoteComponent } from './features/add-vote/add-vote.component';
import { EditComponent } from './features/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { GetVoteComponent } from './features/get-vote/get-vote.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EditComponent,
    GetVoteComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
    
  ],
  exports:[SharedModule],
  providers: [AuthGurd,
    HttpService,
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
