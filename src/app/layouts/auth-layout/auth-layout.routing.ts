import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { LoginPageComponent } from 'src/app/features/login-page/login-page.component';

export const AuthLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(AuthLayoutRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
