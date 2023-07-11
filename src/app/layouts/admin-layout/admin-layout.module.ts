import { NgModule } from '@angular/core';
// import { CoreModule } from '@core/core.module';
import { AdminRoutingModule } from './admin-layout.routing';
import { AdminLayoutComponent } from './admin-layout.component';
import { WelcomePageComponent } from 'src/app/features/welcome-page/welcome-page.component';
import { DashboardComponent } from 'src/app/features/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddVoteComponent } from 'src/app/features/add-vote/add-vote.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';

// import { ManagementModule } from '@features/feat-management/management.module';

@NgModule({
  declarations: [AdminLayoutComponent , WelcomePageComponent , DashboardComponent ,  AddVoteComponent],
  imports: [
    // CoreModule,
    // CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatChipsModule,
    MatToolbarModule
      
  ],
  providers: [],
  exports:[DashboardComponent , WelcomePageComponent]
})
export class AdminLayoutModule {}
