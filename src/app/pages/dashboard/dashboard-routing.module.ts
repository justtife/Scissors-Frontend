import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubDashComponent } from '../sub-dash/sub-dash.component';
import { UserComponent } from '../user/user.component';
import { QrcodeComponent } from '../qrcode/qrcode.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { SupportComponent } from '../support/support.component';
const routes: Routes = [
  { path: 'dashboard', component: SubDashComponent },
  { path: 'profile', component: UserComponent },
  { path: 'qrcode', component: QrcodeComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'support', component: SupportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
