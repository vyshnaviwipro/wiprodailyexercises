import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-loader',
  templateUrl: './country-loader.html',
  standalone: true,
  imports: [CommonModule]
})
export class CountryLoader {
  dropdownList = ['India', 'USA', 'UK'];
}

