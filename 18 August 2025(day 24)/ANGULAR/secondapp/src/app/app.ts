<<<<<<< HEAD
/*exercise 7,8,9
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
//  message = signal('Hello Angular with Signals!');//
  message = signal('Vyshnavi');
  printMessage() {
    console.log('Message from textbox:', this.message());
  }
}*/
/*import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  nameList = signal<string[]>([
    'Meena',
    'Rahul',
    'Sneha',
    'Arjun',
    'Priya'
  ]);
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckboxMsgComponent } from './checkbox-msg/checkbox-msg';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, CheckboxMsgComponent] 
})
export class App {}

import { CountryLoader } from './country-loader/country-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, CountryLoader]   // ✅ use CountryLoader
})
export class App {}*/
import { Component } from '@angular/core';
import { ColorComponent } from './color/color';
import { CommonModule } from '@angular/common'; // for *ngIf, *ngFor
import { FormsModule } from '@angular/forms';   // for ngModel

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [ColorComponent, CommonModule, FormsModule]  // ✅ import ColorComponent
})
export class AppComponent { }

=======
/*exercise 7,8,9
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
//  message = signal('Hello Angular with Signals!');//
  message = signal('Vyshnavi');
  printMessage() {
    console.log('Message from textbox:', this.message());
  }
}*/
/*import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  nameList = signal<string[]>([
    'Meena',
    'Rahul',
    'Sneha',
    'Arjun',
    'Priya'
  ]);
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckboxMsgComponent } from './checkbox-msg/checkbox-msg';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, CheckboxMsgComponent] 
})
export class App {}

import { CountryLoader } from './country-loader/country-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, CountryLoader]   // ✅ use CountryLoader
})
export class App {}*/
import { Component } from '@angular/core';
import { ColorComponent } from './color/color';
import { CommonModule } from '@angular/common'; // for *ngIf, *ngFor
import { FormsModule } from '@angular/forms';   // for ngModel

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [ColorComponent, CommonModule, FormsModule]  // ✅ import ColorComponent
})
export class AppComponent { }

>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
