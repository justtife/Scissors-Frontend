import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-sub-dash',
  templateUrl: './sub-dash.component.html',
  styleUrls: ['./sub-dash.component.scss'],
})
export class SubDashComponent {
  numbers = [1, 2, 3, 4];
  inputText: string = '';
  newTag: string = '';
  tags: string[] = [];
<<<<<<< HEAD
  userData: any;
 
  constructor(private http: UserService) {}
=======
  showModal: boolean = true;
  isSubmitting: boolean = false;
  urlData: any = {};
  qrCode: any;
  qrCodeDetails: any;
  clipboardIcon: string = 'bi-clipboard2';
  showResponse: boolean = false;
  generateQRCode: boolean = false;
  error: object | any = {
    message: '',
    icon: '',
    type: '',
  };
  currentUrl = window.location.origin.replace(/^https?:\/\//, '');
  response: any;
  constructor(private http: UrlServiceService, private route: Router) {}
>>>>>>> parent of 4895142 (Updated the frontend)
  ngOnInit() {
    this.getAUser();
  }
  convertToLower(value: string) {
    this.inputText = value.toLowerCase();
  }
  addTag() {
    if (this.newTag.trim() !== '') {
      this.tags.push(this.newTag);
      this.newTag = '';
    }
  }
  removeTag(index: number) {
    this.tags.splice(index, 1);
  }
  getAUser() {
    let userID = localStorage.getItem('userID');
    this.http.getUser(userID as string).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
<<<<<<< HEAD
    );
=======
      this.http.shortenURL(this.urlData).subscribe(
        (response) => {
          this.response = response.data;
          this.clipboardIcon = 'bi-clipboard2';
          this.isSubmitting = false;
          this.showModal = true;
          this.showResponse = true;
        },
        (error) => {
          this.error.message = error.error.message;
          this.error.icon = 'bi-exclamation-circle';
          this.error.type = 'alert-warning';
          this.isSubmitting = false;
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  getUserUrl() {
    setTimeout(() => {
      const userID = localStorage.getItem('userID');
      if (userID) {
        this.http.getUserUrl(userID).subscribe(
          (response) => {
            this.urls = response.data.reverse();
          },
          (error) => {
            this.urls = null;
          }
        );
      }
    });
  }
  getUserQrCode() {
    const userID = localStorage.getItem('userID');
    if (userID) {
      this.http.getUserQrCode(userID).subscribe(
        (response) => {
          this.qrCode = response.data.reverse()[0];
          this.qrCodeDetails = response.data;
        },
        (error) => {
          this.qrCode = null;
        }
      );
    }
  }
  onGenerateQRCodeChange() {
    this.generateQRCode = !this.generateQRCode; // Toggle the value of generateQRCode
  }
  copyLink() {
    const textToCopy = `${this.currentUrl}/${this.response.short_url}`;
    this.clipboardIcon = 'bi-clipboard2-check';
    navigator.clipboard.writeText(textToCopy);
>>>>>>> parent of 4895142 (Updated the frontend)
  }
}
