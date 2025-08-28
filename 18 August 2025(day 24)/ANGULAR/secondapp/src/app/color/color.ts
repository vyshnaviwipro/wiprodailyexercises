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
