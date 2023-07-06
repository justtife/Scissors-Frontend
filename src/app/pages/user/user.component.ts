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
  userData: any;
<<<<<<< HEAD
  user: any = {
  };
=======
  user: any = {};
>>>>>>> parent of 4895142 (Updated the frontend)
  countries: any;
  selectedImageFile: File | any;
  selectedImageSource: string | any;
  isSubmitting: boolean = false;
  userID: string | null = localStorage.getItem('userID');
  formData: FormData = new FormData();
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
      const selectedFile = (event.target as HTMLInputElement)?.files?.[0];
      if (selectedFile) {
        this.selectedImageFile = selectedFile;
        this.formData.append(
          'profilePic',
          selectedFile,
          this.selectedImageFile.name
        );
        this.getImageSource(selectedFile);
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
  onSubmit() {
    this.isSubmitting = true;
    this.http
      .imageUpload(this.formData)
      .pipe(
        switchMap((response) => {
          this.user.profilePic = response.data;
          return this.http.updateUser(this.userID as string, this.user);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
<<<<<<< HEAD
      });
=======
        this.user = {};
      });
  }
  onChangeEmail() {
    
>>>>>>> parent of 4895142 (Updated the frontend)
  }
}
