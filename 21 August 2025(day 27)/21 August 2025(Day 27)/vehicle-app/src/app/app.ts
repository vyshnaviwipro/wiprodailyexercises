/*import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vehicle-app');
}*/
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { VehicleCompComponent } from './vehicle-comp/vehicle-comp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VehicleCompComponent],
  template: `<app-vehicle-comp></app-vehicle-comp>`
})
export class App {}

bootstrapApplication(App);
