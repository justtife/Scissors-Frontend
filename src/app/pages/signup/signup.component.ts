import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { AlertComponent } from 'src/app/component/alert/alert.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isSubmitting: boolean = false;
  user: any = {};
  response: object | any = {
    message: '',
    icon: '',
    type: '',
  };
  selectedFile: any;
  countries: any;
  @ViewChild(AlertComponent) alertComponent!: AlertComponent;
  constructor(private http: UserService, private route: Router) {}
  ngOnInit() {
    this.http.getAllCountries().subscribe((response) => {
      const sortedData = response.sort((a: any, b: any) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.countries = sortedData;
    });
  }
  login() {
    this.route.navigate(['login']);
  }
  resetAlert(): void {
    if (this.alertComponent) {
      this.alertComponent.resetAlert();
    }
  }
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (!inputElement.files || inputElement.files.length === 0) {
      return;
    }
    const file = inputElement.files;
    this.selectedFile = file;
    this.user.profilePic = file;
    console.log(inputElement.files);
  }
  async onSubmit() {
    this.isSubmitting = true;
    try {
      this.http.signUser(this.user).subscribe(
        (response: any) => {
          this.response.message = response.message;
          this.response.type = 'alert-success';
          this.response.icon = 'bi-hand-thumbs-up';
          localStorage.setItem('token', response.token);
          localStorage.setItem('userID', response.data.userID);
          setTimeout(() => {
            this.route.navigate(['/dashboard']);
            this.isSubmitting = false;
          }, 3000);
        },
        (error: any) => {
          console.log(error.error.message);
          this.response.message = error.error.message;
          this.response.type = 'alert-warning';
          this.response.icon = 'bi-exclamation-triangle';
          this.isSubmitting = false;
          this.resetAlert();
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
}
