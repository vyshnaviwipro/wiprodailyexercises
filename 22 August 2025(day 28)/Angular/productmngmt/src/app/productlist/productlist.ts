<<<<<<< HEAD
import { Component } from '@angular/core';
import { Product } from '../product';
import { OnInit } from '@angular/core';
import { Productservice } from '../productservice';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-productlist',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist implements OnInit {
  constructor(private productService: Productservice, private router: Router) {}

  products: Product[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products : ', error);
      }
    );
  }

  addProduct() {
    this.router.navigate(['/productadd']);
  }
}
=======
import { Component } from '@angular/core';
import { Product } from '../product';
import { OnInit } from '@angular/core';
import { Productservice } from '../productservice';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-productlist',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist implements OnInit {
  constructor(private productService: Productservice, private router: Router) {}

  products: Product[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products : ', error);
      }
    );
  }

  addProduct() {
    this.router.navigate(['/productadd']);
  }
}
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
