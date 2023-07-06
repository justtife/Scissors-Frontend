import { Component, OnInit } from '@angular/core';
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
  urlData:any={}
  showCustomUrl: boolean = false;
  customUrl: string = '';
  constructor(private http: UrlServiceService) {}
  toggleCustomUrl(): void {
    this.showCustomUrl = !this.showCustomUrl;
  }
  shortenURL(){
    try {}
    catch(err){
      console.log(err)
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    this.error = {};
>>>>>>> parent of 25d56b6 (Updates)
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
>>>>>>> parent of 4895142 (Updated the frontend)
  }
}
