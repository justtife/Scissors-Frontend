import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  typedText: string = '';
  word: string = 'Loading';
  letterIndex: number = 0;

  ngOnInit() {
    this.type();
  }

  type() {
    if (this.letterIndex < this.word.length) {
      this.typedText += this.word[this.letterIndex];
      this.letterIndex++;
      setTimeout(() => this.type(), 300);
    }
  }
}
