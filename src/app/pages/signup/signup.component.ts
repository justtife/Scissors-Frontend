import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isSubmitting: boolean = false;
  user: any = {
    profilePic: '',
  };
  response: object | any = {};
  selectedFile: any;
  countries: any;
  formData: FormData = new FormData();
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

  imageUpload(e: any) {
    let file = e.target.files[0];
    console.log(file);
    this.formData.append('profilePic', file, file.name);
  }
  async onSubmit() {
    this.isSubmitting = true;
<<<<<<< HEAD
<<<<<<< HEAD
    this.http
      .imageUpload(this.formData)
      .pipe(
=======
=======
    this.response = {};
>>>>>>> parent of 25d56b6 (Updates)
    let requestObservable;
    if (this.file) {
      requestObservable = this.http.imageUpload(this.formData).pipe(
>>>>>>> parent of 4895142 (Updated the frontend)
        switchMap((response) => {
          this.user.profilePic = response.data;
          return this.http.signUser(this.user);
        })
      )
      .subscribe(
        (response: any) => {
          this.response.message = response.message;
          this.response.type = 'alert-success';
          this.response.icon = 'bi-hand-thumbs-up';
          localStorage.setItem('srstoken', response.token);
          localStorage.setItem('userID', response.data.userID);
          const currentDate = new Date();
          const sixHoursFromNow = new Date(
            currentDate.getTime() + 6 * 60 * 60 * 1000
          );
          const dateString = sixHoursFromNow.toISOString();
          localStorage.setItem('tokenExp', dateString);
          // Navigate and reset isSubmitting after 3 seconds
          setTimeout(() => {
            this.route.navigate(['/dashboard']);
            this.isSubmitting = false;
          }, 3000);
        },
        (error: any) => {
          // Handle signUser error
          console.log(error.error.message);
          // Rest of the code...
        }
      );
<<<<<<< HEAD
=======
    } else {
      this.user.profilePic = '';
      requestObservable = this.http.signUser(this.user);
    }
    requestObservable.subscribe(
      (response: any) => {
        this.response.message = response.message;
        this.response.type = 'alert-success';
        this.response.icon = 'bi-hand-thumbs-up';
        localStorage.setItem('srstoken', response.token);
        localStorage.setItem('userID', response.data.userID);
        // Navigate and reset isSubmitting after 3 seconds
        setTimeout(() => {
          this.route.navigate(['/dashboard']);
          this.isSubmitting = false;
        }, 3000);
      },
      (error: any) => {
        this.response.message = error.error.message;
        this.response.icon = 'bi-exclamation-circle';
        this.response.type = 'alert-warning';
        this.isSubmitting = false;
      }
    );
>>>>>>> parent of 4895142 (Updated the frontend)
  }
}
