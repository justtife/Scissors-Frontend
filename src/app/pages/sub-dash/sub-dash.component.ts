import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlServiceService } from 'src/app/services/url-service.service';
@Component({
  selector: 'app-sub-dash',
  templateUrl: './sub-dash.component.html',
  styleUrls: ['./sub-dash.component.scss'],
})
export class SubDashComponent implements OnInit {
  urls: any;
  inputText: string = '';
  newTag: string = '';
  tags: string[] = [];
  showModal: boolean = true;
  isSubmitting: boolean = false;
  urlData: any = {};
  qrCode: any;
  qrCodeDetails: any;
  clipboardIcon: string = 'bi-clipboard2';
  showResponse: boolean = false;
  generateQRCode: boolean = false;
  error: object | any = {};
  currentUrl = window.location.origin.replace(/^https?:\/\//, '');
  response: any;
  constructor(private http: UrlServiceService, private route: Router) {}
  ngOnInit() {
    this.getUserUrl();
    this.getUserQrCode();
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

  cancelModal() {
    this.showModal = false;
    this.showResponse = false;
    this.response = {};
    this.ngOnInit();
  }
  shortenUrl() {
    this.urlData.tag = this.tags;
    try {
      this.error = {};
      this.isSubmitting = true;
      if (!this.urlData.short_url) {
        delete this.urlData.short_url;
      }
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
          console.log(this.qrCode);
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
  }
}
