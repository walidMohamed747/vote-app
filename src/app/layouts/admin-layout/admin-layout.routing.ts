import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { WelcomePageComponent } from 'src/app/features/welcome-page/welcome-page.component';
import { DashboardComponent } from 'src/app/features/dashboard/dashboard.component';
import { EditComponent } from 'src/app/features/edit/edit.component';
import { AddVoteComponent } from 'src/app/features/add-vote/add-vote.component';
import { GetVoteComponent } from 'src/app/features/get-vote/get-vote.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome-page',
        pathMatch: 'full',
      },
      {
        path:'welcome-page' ,
        component: WelcomePageComponent
      } ,
      {
        path:'add-vote' ,
          component: AddVoteComponent
        } ,
      {
      path:'get-vote' ,
        component: GetVoteComponent
      } ,
      {
      path:'Edit-vote' ,
        component: EditComponent
      } ,
      
      {
      path:'add-vote' ,
        component: AddVoteComponent
      } ,
      // {
      // path:'dashboard' ,
      //   component: DashboardComponent
      // } ,
      
    ],
  },
  // {
  //   path: '**',
  //   //  canActivate: [AuthGurd],
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(AdminLayoutRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
