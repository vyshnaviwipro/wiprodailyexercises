<<<<<<< HEAD
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Loginservice } from '../../services/loginservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('bookmyfood');

  constructor(private loginService: Loginservice, private router: Router) {}

  logout() {
    this.loginService.logout(); // Remove token
    this.router.navigate(['/login']); // Navigate to login
  }

  isLoggedIn(): boolean {
    return this.loginService.getToken() !== null;
  }
}
=======
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Loginservice } from '../../services/loginservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('bookmyfood');

  constructor(private loginService: Loginservice, private router: Router) {}

  logout() {
    this.loginService.logout(); // Remove token
    this.router.navigate(['/login']); // Navigate to login
  }

  isLoggedIn(): boolean {
    return this.loginService.getToken() !== null;
  }
}
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
