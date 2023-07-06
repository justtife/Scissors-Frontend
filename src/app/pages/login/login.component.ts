import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isSubmitting: boolean = false;
  user = {
    user: '',
    password: '',
  };
  response: object | any = {
    message: '',
    icon: '',
    type: '',
  };
  constructor(private http: UserService, private route: Router) {}
  async onSubmit() {
    this.isSubmitting = true;
    try {
      this.response = {};
      this.http.loginUser(this.user).subscribe(
        (response) => {
          localStorage.setItem('srstoken', response.token);
          localStorage.setItem('userID', response.data.userID);
          const currentDate = new Date();
          const sixHoursFromNow = new Date(
            currentDate.getTime() + 3 * 60 * 60 * 1000
          );
          const dateString = sixHoursFromNow.toISOString();
          localStorage.setItem(
            'tokenExp',
            dateString + ' ' + response.data.userID
          );
          this.route.navigate(['/dashboard']);
          this.isSubmitting = false;
        },
        (error) => {
          this.response.message = error.error.message;
          this.response.icon = 'bi-exclamation-circle';
          this.response.type = 'alert-warning';
          this.isSubmitting = false;
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
}
