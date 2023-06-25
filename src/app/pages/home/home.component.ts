import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
  showCustomUrl: boolean = false;
  customUrl: string = '';
  constructor(private route: Router) {}
  signup() {
    this.route.navigate(['/signup']);
  }
  login() {
    this.route.navigate(['/login']);
  }
  dashboard() {
    this.route.navigate(['/dashboard']);
  }
  qrcode() {
    this.route.navigate(['/qrcode']);
  }
  analytics() {
    this.route.navigate(['/analytics']);
  }
}
