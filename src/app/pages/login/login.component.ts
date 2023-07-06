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
<<<<<<< HEAD
<<<<<<< HEAD
  apiResponse: any;
=======
  response: object | any = {
    message: '',
    icon: '',
    type: '',
  };
>>>>>>> parent of 4895142 (Updated the frontend)
=======
  response: object | any = {};
>>>>>>> parent of 25d56b6 (Updates)
  constructor(private http: UserService, private route: Router) {}
  async onSubmit() {
    this.isSubmitting = true;
    this.response = {};
    try {
      this.http.loginUser(this.user).subscribe(
        (response) => {
          this.apiResponse = response;
          localStorage.setItem('token', response.token);
          localStorage.setItem('userID', response.data.userID);
<<<<<<< HEAD
<<<<<<< HEAD
          setTimeout(() => {
            this.route.navigate(['/dashboard']); // Replace '/dashboard' with your desired route
            this.isSubmitting = false;
          }, 3000);
=======
          const currentDate = new Date();
          const sixHoursFromNow = new Date(
            currentDate.getTime() + 3 * 60 * 60 * 1000
          );
          const dateString = sixHoursFromNow.toISOString();
          localStorage.setItem(
            'tokenExp',
            dateString + ' ' + response.data.userID
          );
=======
>>>>>>> parent of 25d56b6 (Updates)
          this.route.navigate(['/dashboard']);
          this.isSubmitting = false;
>>>>>>> parent of 4895142 (Updated the frontend)
        },
        (error) => {
          this.isSubmitting = false;
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
}
