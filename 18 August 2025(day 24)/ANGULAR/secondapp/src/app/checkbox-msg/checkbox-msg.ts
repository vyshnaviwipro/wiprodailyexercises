
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkbox-msg',
  templateUrl: './checkbox-msg.html',
  standalone: true, 
  imports: [CommonModule]
})
export class CheckboxMsgComponent {
  showMessage = false;
}

