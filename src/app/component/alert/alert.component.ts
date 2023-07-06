import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() response: any;
  showAlert: boolean = true;
<<<<<<< HEAD
<<<<<<< HEAD
  ngOnInit(): void {
    this.clearAlert();
  }
  onCancelClick(): void {
    this.showAlert = false;
  }
  clearAlert() {
=======
=======
  ngOnInit(): void {
    this.resetAlert();
  }
>>>>>>> parent of 25d56b6 (Updates)
  onCancelClick(): void {
    this.showAlert = false;
  }
  resetAlert(): void {
<<<<<<< HEAD
    this.showAlert = true;
>>>>>>> parent of 4895142 (Updated the frontend)
=======
>>>>>>> parent of 25d56b6 (Updates)
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }
}
