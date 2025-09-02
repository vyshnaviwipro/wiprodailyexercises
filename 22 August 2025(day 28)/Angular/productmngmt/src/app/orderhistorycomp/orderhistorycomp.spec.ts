<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderhistorycomp } from './orderhistorycomp';

describe('Orderhistorycomp', () => {
  let component: Orderhistorycomp;
  let fixture: ComponentFixture<Orderhistorycomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orderhistorycomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderhistorycomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderhistorycomp } from './orderhistorycomp';

describe('Orderhistorycomp', () => {
  let component: Orderhistorycomp;
  let fixture: ComponentFixture<Orderhistorycomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orderhistorycomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderhistorycomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
