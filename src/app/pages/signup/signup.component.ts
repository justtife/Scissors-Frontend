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
  file: any;
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
    this.file = e.target.files[0];
    this.formData.append('profilePic', this.file, this.file.name);
  }
  async onSubmit() {
    this.isSubmitting = true;
    this.response = {};
    let requestObservable;
    if (this.file) {
      requestObservable = this.http.imageUpload(this.formData).pipe(
        switchMap((response) => {
          this.user.profilePic = response.data;
          return this.http.signUser(this.user);
        })
      );
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
  }
}
