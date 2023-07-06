import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() response: any;
  showAlert: boolean = true;
<<<<<<< HEAD
  ngOnInit(): void {
    this.clearAlert();
  }
  onCancelClick(): void {
    this.showAlert = false;
  }
  clearAlert() {
=======
  onCancelClick(): void {
    this.showAlert = false;
  }
  resetAlert(): void {
    this.showAlert = true;
>>>>>>> parent of 4895142 (Updated the frontend)
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }
}
