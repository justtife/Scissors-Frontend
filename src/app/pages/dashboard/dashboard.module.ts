import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderModule } from '../../component/header/header.module';
import { LoadingComponent } from 'src/app/component/loading/loading.component';
@NgModule({
  declarations: [DashboardComponent, LoadingComponent],
  imports: [CommonModule, DashboardRoutingModule, HeaderModule],
})
export class DashboardModule {}
