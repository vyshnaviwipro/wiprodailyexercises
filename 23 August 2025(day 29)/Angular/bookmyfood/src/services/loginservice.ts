<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from '../interfaces/ilogin';
import { Observable } from 'rxjs';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root',
})
export class Loginservice {
  constructor(private http: HttpClient) {}

  login(req: Ilogin): Observable<Token> {
    const BASE_URL = 'http://localhost:9191/user/login';
    return this.http.post<Token>(BASE_URL, req);
  }

  saveToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout() {
    localStorage.removeItem('jwtToken');
  }
}
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from '../interfaces/ilogin';
import { Observable } from 'rxjs';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root',
})
export class Loginservice {
  constructor(private http: HttpClient) {}

  login(req: Ilogin): Observable<Token> {
    const BASE_URL = 'http://localhost:9191/user/login';
    return this.http.post<Token>(BASE_URL, req);
  }

  saveToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout() {
    localStorage.removeItem('jwtToken');
  }
}
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
