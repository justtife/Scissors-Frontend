import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @Input() pageTitle: string | any;
  @Input() pageSubTitle: string | any;
  isWidthToggled: boolean = true;
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
}
