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

  constructor(private route: Router, private http: UserService) {}
  ngOnInit() {
    this.getAUser();
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
  getAUser() {
    let userID = localStorage.getItem('userID');
    this.http.getUser(userID as string).subscribe(
      (response: any) => {
        this.loggedIn = true;
        this.userData = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
