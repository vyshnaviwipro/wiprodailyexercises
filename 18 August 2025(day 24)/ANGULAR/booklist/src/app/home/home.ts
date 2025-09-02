<<<<<<< HEAD

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Book = {
  id: number;
  title: string;
  description: string;
  image: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  books: Book[] = Array.from({ length: 20 }, (_, i) => {
    const id = i + 1;
    return {
      id,
      title: `Book Title ${id}`,
      description:
        'A short description about this book. Books are a uniquely portable magic.',
      image: 'https://m.media-amazon.com/images/I/81hkBurZtHL._SL1500_.jpg',
    };
  });
}
=======

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Book = {
  id: number;
  title: string;
  description: string;
  image: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  books: Book[] = Array.from({ length: 20 }, (_, i) => {
    const id = i + 1;
    return {
      id,
      title: `Book Title ${id}`,
      description:
        'A short description about this book. Books are a uniquely portable magic.',
      image: 'https://m.media-amazon.com/images/I/81hkBurZtHL._SL1500_.jpg',
    };
  });
}
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
