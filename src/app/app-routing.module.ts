import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
<<<<<<< HEAD
=======
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RedirectComponent } from './component/redirect/redirect.component';
<<<<<<< HEAD
>>>>>>> parent of 4895142 (Updated the frontend)
=======
import { LoadingComponent } from './component/loading/loading.component';
>>>>>>> parent of 25d56b6 (Updates)
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD

=======
  { path: 'not-found', component: NotFoundComponent },
<<<<<<< HEAD
>>>>>>> parent of 4895142 (Updated the frontend)
=======
  { path: 'loading', component: LoadingComponent },
>>>>>>> parent of 25d56b6 (Updates)
  {
    path: '',
    component: DashboardComponent,canActivate:[AuthGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
<<<<<<< HEAD
<<<<<<< HEAD
  },
=======
    },
    { path: '**', component: RedirectComponent },
>>>>>>> parent of 4895142 (Updated the frontend)
=======
  },
  { path: '**', component: RedirectComponent },
>>>>>>> parent of 25d56b6 (Updates)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
