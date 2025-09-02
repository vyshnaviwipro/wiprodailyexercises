<<<<<<< HEAD
import { Component, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';
@Component({
  selector: 'app-tasklist',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
  // Ex8
newDescription = '';
  newCategory = 'Work';

  categories = ['Work', 'Study', 'Exercise'];

@Output() add = new EventEmitter<Task>();
  addTask() {
    this.add.emit({
      description: this.newDescription,
      category: this.newCategory
    });
    this.newDescription = '';
    this.newCategory = 'Work';
  }
}
=======
import { Component, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';
@Component({
  selector: 'app-tasklist',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
  // Ex8
newDescription = '';
  newCategory = 'Work';

  categories = ['Work', 'Study', 'Exercise'];

@Output() add = new EventEmitter<Task>();
  addTask() {
    this.add.emit({
      description: this.newDescription,
      category: this.newCategory
    });
    this.newDescription = '';
    this.newCategory = 'Work';
  }
}
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
