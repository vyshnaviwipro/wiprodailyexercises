
import { Component } from '@angular/core';

@Component({
  selector: 'app-secondcomp',
  standalone: true,   // 👈 add this line
  templateUrl: './secondcomp.html',
  styleUrls: ['./secondcomp.css']
})
export class SecondcompComponent { }
