<<<<<<< HEAD
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ex3',
  imports: [NgClass],
  templateUrl: './ex3.component.html',
  styleUrl: './ex3.component.css'
})
export class Ex3Component {
  // Ex3
  isHighlighted = true;
  isLargeText = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  toggleTextSize() {
    this.isLargeText = !this.isLargeText;
  }

  getNgClass() {
    return {
      'highlight': this.isHighlighted,
      'large-text': this.isLargeText
    };
  }
}
=======
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ex3',
  imports: [NgClass],
  templateUrl: './ex3.component.html',
  styleUrl: './ex3.component.css'
})
export class Ex3Component {
  // Ex3
  isHighlighted = true;
  isLargeText = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  toggleTextSize() {
    this.isLargeText = !this.isLargeText;
  }

  getNgClass() {
    return {
      'highlight': this.isHighlighted,
      'large-text': this.isLargeText
    };
  }
}
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
