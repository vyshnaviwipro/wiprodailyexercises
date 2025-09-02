<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './reactiveforms.html',
  styleUrl: './reactiveforms.css',
})
export class Reactiveforms {
  textControl = new FormControl();

  get reversedText(): string {
    return this.textControl.value.split('').reverse().join('');
  }
}
=======
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './reactiveforms.html',
  styleUrl: './reactiveforms.css',
})
export class Reactiveforms {
  textControl = new FormControl();

  get reversedText(): string {
    return this.textControl.value.split('').reverse().join('');
  }
}
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
