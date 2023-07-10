import { NgModule } from '@angular/core';
// import { CoreModule } from '@core/core.module';
import { AdminRoutingModule } from './admin-layout.routing';
import { AdminLayoutComponent } from './admin-layout.component';
import { WelcomePageComponent } from 'src/app/features/welcome-page/welcome-page.component';
import { DashboardComponent } from 'src/app/features/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// import { ManagementModule } from '@features/feat-management/management.module';

@NgModule({
  declarations: [AdminLayoutComponent , WelcomePageComponent , DashboardComponent ,  ],
  imports: [
    // CoreModule,
    // CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FlexLayoutModule
      
  ],
  providers: [],
  exports:[DashboardComponent , WelcomePageComponent]
})
export class AdminLayoutModule {}
