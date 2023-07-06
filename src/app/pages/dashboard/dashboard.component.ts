import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() pageTitle: string | any;
  @Input() pageSubTitle: string | any;
  isWidthToggled: boolean = true;
  loading: boolean = true;
  response: any = {
    message: '',
    icon: '',
    type: '',
  };
  ngOnInit(): void {
    this.setLoading();
  }
  setLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }
  constructor(private http: UserService, private route: Router) {}
  toggleWidth() {
    this.isWidthToggled = !this.isWidthToggled;
  }
  logout() {
    localStorage.removeItem('srstoken');
    localStorage.removeItem('userID');
    this.loading = true;
    this.http.logout().subscribe((response) => {
      setTimeout(() => {
        this.route.navigate(['/home']);
      }, 1000);
    });
  }
}
