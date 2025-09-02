<<<<<<< HEAD
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../task';
@Component({
  selector: 'app-task',
  imports: [CommonModule],
  // templateUrl: './task.component.html',
  // Ex8
    template: `
    <div style="display:flex; gap: 10px; align-items: center;">
      <span>{{ task.description }}</span>
      <span>{{ task.category }}</span>
      <button (click)="onDelete()">Delete</button>
    </div>
  `,
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // Ex8
  @Input() task!: Task;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.task.id);
  }
}
=======
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../task';
@Component({
  selector: 'app-task',
  imports: [CommonModule],
  // templateUrl: './task.component.html',
  // Ex8
    template: `
    <div style="display:flex; gap: 10px; align-items: center;">
      <span>{{ task.description }}</span>
      <span>{{ task.category }}</span>
      <button (click)="onDelete()">Delete</button>
    </div>
  `,
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // Ex8
  @Input() task!: Task;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.task.id);
  }
}
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
