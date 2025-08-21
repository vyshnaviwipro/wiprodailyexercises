/*import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-comp',
  imports: [],
  templateUrl: './vehicle-comp.html',
  styleUrl: './vehicle-comp.css'
})
export class VehicleComp {

}
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle';

import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-comp',
  templateUrl: './vehicle-comp.html',
  styleUrls: ['./vehicle-comp.css']
})
export class VehicleCompComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../services/vehicle';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-comp.html',
  styleUrls: ['./vehicle-comp.css']
})
export class VehicleCompComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((data: Vehicle[]) => {
      this.vehicles = data;
    });
  }
}
*/
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../services/vehicle';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-comp.html',
})
export class VehicleCompComponent {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles() {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }

  addVehicle() {
    const newVehicle: Vehicle = {
      make: 'Honda',
      fuelType: 'Petrol',
      model: 'City',
      price: 1200000
    };
    this.vehicleService.addVehicle(newVehicle).subscribe(() => {
      this.loadVehicles();
    });
  }

  updateVehicle(v: Vehicle) {
    if (!v.id) return;
    const updated: Vehicle = { ...v, price: v.price + 10000 };
    this.vehicleService.updateVehicle(v.id, updated).subscribe(() => {
      this.loadVehicles();
    });
  }

  deleteVehicle(id?: number) {
    if (!id) return;
    this.vehicleService.deleteVehicle(id).subscribe(() => {
      this.loadVehicles();
    });
  }
}
