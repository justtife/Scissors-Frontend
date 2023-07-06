import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  // @ViewChild('fileInput') fileInput!: ElementRef;
  userData: any = {
    name: '',
    sex: '',
    nationality: '',
  };
  response: any = {
    message: '',
    icon: '',
    type: '',
  };
  user: any = {};
  countries: any;
  selectedImageFile: File | any;
  selectedImageSource: string | any;
  isSubmitting: boolean = false;
  userID: string | null = localStorage.getItem('userID');
  formData: FormData = new FormData();
  selectedFile: any;
  ngOnInit() {
    this.getAUser();
    this.getCountries();
  }
  constructor(private http: UserService) {}
  getAUser() {
    this.http.getUser(this.userID as string).subscribe(
      (response: any) => {
        console.log(response);
        this.userData = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getCountries() {
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
  openFilePicker() {
    const input = document.createElement('input');
    input.type = 'file';

    // Add an event listener to handle the file selection
    input.addEventListener('change', (event) => {
      this.selectedFile = (event.target as HTMLInputElement)?.files?.[0];
      if (this.selectedFile) {
        this.selectedImageFile = this.selectedFile;
        this.formData.append(
          'profilePic',
          this.selectedFile,
          this.selectedImageFile.name
        );
        this.getImageSource(this.selectedFile);
        // Do something with the selected file
      }
    });

    // Trigger the file selection dialog
    input.click();
  }
  getImageSource(file: File) {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.selectedImageSource = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
  cancelSelection() {
    this.selectedImageFile = null;
    this.selectedImageSource = '';
  }
  onUpdate() {
    let updateUser;
    this.isSubmitting = false;
    this.user.firstname = this.userData.name.first;
    this.user.lastname = this.userData.name.last;
    this.user.username = this.userData.name.user;
    this.user.nationality = this.userData.nationality;
    this.user.sex = this.userData.sex;
    this.isSubmitting = true;
    if (this.selectedFile) {
      updateUser = this.http.imageUpload(this.formData).pipe(
        switchMap((response) => {
          this.user.profilePic = response.data;
          console.log(this.user);
          return this.http.updateUser(this.userID as string, this.user);
        })
      );
    } else {
      console.log(this.user);
      updateUser = this.http.updateUser(this.userID as string, this.user);
    }
    updateUser.subscribe(
      (response: any) => {
        this.response.message = response.message;
        this.response.type = 'alert-success';
        this.response.icon = 'bi-hand-thumbs-up';
        this.ngOnInit();
        this.isSubmitting = false;
        this.user = {};
      },
      (error) => {
        this.response.message = error.error.message;
        this.response.icon = 'bi-exclamation-circle';
        this.response.type = 'alert-warning';
      }
    );
    this.isSubmitting = false;
  }
  onChangeEmail() {}
}
