import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AlertComponent } from './component/alert/alert.component';
import { SubDashComponent } from './pages/sub-dash/sub-dash.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { HeaderModule } from './component/header/header.module';
import { UserComponent } from './pages/user/user.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RedirectComponent } from './component/redirect/redirect.component';
<<<<<<< HEAD
>>>>>>> parent of 4895142 (Updated the frontend)
=======
import { QrcodeComponent } from './pages/qrcode/qrcode.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { SupportComponent } from './pages/support/support.component';
>>>>>>> parent of 25d56b6 (Updates)
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    SubDashComponent,
    UserComponent,
<<<<<<< HEAD
=======
    NotFoundComponent,
    RedirectComponent,
<<<<<<< HEAD
>>>>>>> parent of 4895142 (Updated the frontend)
=======
    QrcodeComponent,
    AnalyticsComponent,
    SupportComponent,
>>>>>>> parent of 25d56b6 (Updates)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DashboardModule,
    HeaderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
