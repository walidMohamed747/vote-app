import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { AuthGurd } from './core/guards/auth-guard';
import { UserComponent } from './features/user/user.component';
// import { CustomPreloadingStrategy } from '@core/services/custom-preloading.service';
// import { NotFoundComponent } from '@features/feat-errors/pages/nottfound/nottfound.component';

const routes: Routes = [

  {
    path: 'auth',
    // canActivate: [IsLogged],
    // loadChildren: () => import('@layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule),
    loadChildren :()=> import('./layouts/auth-layout/auth-layout.module').then(m=>m.AuthLayoutModule)
  },
  // {
  //  path: '',
  //    redirectTo:'/auth/login',
  //     pathMatch:'full'
  //   },
    {
      path:'',
      canActivate: [AuthGurd],// remove user & pass from environment    
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m=>m.AdminLayoutModule)
    },

  {path: 'users'  , component : UserComponent}

   ]  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
