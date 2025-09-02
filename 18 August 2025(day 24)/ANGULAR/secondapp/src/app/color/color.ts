<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.html',
  styleUrls: ['./color.css']
})
export class ColorComponent {       // ✅ class name must match
  color: string = 'default';

  getColor(): string {
    switch(this.color) {
      case 'red': return 'red';
      case 'green': return 'green';
      case 'black': return 'black';
      default: return 'gray';
    }
  }
}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.html',
  styleUrls: ['./color.css']
})
export class ColorComponent {       // ✅ class name must match
  color: string = 'default';

  getColor(): string {
    switch(this.color) {
      case 'red': return 'red';
      case 'green': return 'green';
      case 'black': return 'black';
      default: return 'gray';
    }
  }
}
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
