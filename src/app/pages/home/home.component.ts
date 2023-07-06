import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { UrlServiceService } from 'src/app/services/url-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
  urlData: any = {};
  isSubmitting: boolean = false;
  showCustomUrl: boolean = false;
  customUrl: string = '';
  newLink: string = '';
  clipboardIcon: string = 'bi-clipboard2';
  error: object | any = {
    message: '',
    icon: '',
    type: '',
  };
  constructor(private http: UrlServiceService, private route: Router) {}
  toggleCustomUrl(): void {
    this.showCustomUrl = !this.showCustomUrl;
  }
  createShortURL() {
    if (!this.showCustomUrl) {
      delete this.urlData.short_url;
    }
    this.error = {};
    this.http.shortenURL(this.urlData).subscribe(
      (response) => {
        this.newLink = `scissors-six.vercel.app/${response.data.short_url}`;
        this.clipboardIcon = 'bi-clipboard2';
        this.isSubmitting = false;
      },
      (error) => {
        this.error.message = error.error.data;
        this.error.icon = 'bi-exclamation-circle';
        this.error.type = 'alert-warning';
        this.isSubmitting = false;
      }
    );
  }
  shortenURL() {
    this.error = {};
    this.isSubmitting = true;
    const isLoggedIn = localStorage.getItem('srstoken');
    if (!isLoggedIn) {
      let trial = localStorage.getItem('trial');
      if (!trial) {
        localStorage.setItem('trial', '1');
      } else {
        let count = parseInt(trial as string);
        count++;
        localStorage.setItem('trial', count.toString());
        if (count > 3) {
          this.route.navigate(['login']);
        } else {
          this.createShortURL();
        }
      }
    } else {
      this.createShortURL();
    }
  }
  copyLink() {
    const textToCopy = this.newLink;
    this.clipboardIcon = 'bi-clipboard2-check';
    navigator.clipboard.writeText(textToCopy);
  }
}
