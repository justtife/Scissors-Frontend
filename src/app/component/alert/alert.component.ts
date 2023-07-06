import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() response: any;
  showAlert: boolean = true;
  ngOnInit(): void {
    this.resetAlert();
  }
  onCancelClick(): void {
    this.showAlert = false;
  }
  resetAlert(): void {
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }
}
