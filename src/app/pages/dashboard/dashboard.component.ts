import { Component, Input } from '@angular/core';
<<<<<<< HEAD

=======
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
>>>>>>> parent of 4895142 (Updated the frontend)
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @Input() pageTitle: string | any;
  @Input() pageSubTitle: string | any;
  isWidthToggled: boolean = true;
<<<<<<< HEAD
  toggleWidth() {
    this.isWidthToggled = !this.isWidthToggled;
  }
=======
  response: any = {
    message: '',
    icon: '',
    type: '',
  };
  constructor(private http: UserService, private route: Router) {}
  toggleWidth() {
    this.isWidthToggled = !this.isWidthToggled;
  }
  logout() {
    localStorage.clear();
    this.http.logout().subscribe((response) => {
      setTimeout(() => {
        this.route.navigate(['/home']);
      }, 100);
    });
  }
>>>>>>> parent of 4895142 (Updated the frontend)
}
