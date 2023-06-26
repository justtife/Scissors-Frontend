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
  }
}
