import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userData: any;
  loggedIn: boolean = false;
  isDropdownVisible: boolean = false;

  constructor(private route: Router, private http: UserService) {}
  ngOnInit() {
    setTimeout(() => {
      this.getAUser();
    });
  }
  signup() {
    this.route.navigate(['/signup']);
  }
  login() {
    this.route.navigate(['/login']);
  }
  home() {
    this.route.navigate(['/home']);
  }
  dashboard() {
    this.route.navigate(['/dashboard']);
  }
  setting() {
    this.route.navigate(['setting']);
  }
  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  logOut() {
    localStorage.removeItem('srstoken');
    localStorage.removeItem('userID');
    this.http.logout().subscribe((response) => {
      setTimeout(() => {
        this.route.navigate(['/home']);
      }, 2000);
    });
  }
  getAUser() {
    let userID = localStorage.getItem('userID');
    if (userID) {
      this.http.getUser(userID as string).subscribe(
        (response: any) => {
          this.loggedIn = true;
          this.userData = response.data;
        },
        (error) => {
          this.loggedIn = false;
        }
      );
    } else {
      this.loggedIn = false;
    }
  }
}
