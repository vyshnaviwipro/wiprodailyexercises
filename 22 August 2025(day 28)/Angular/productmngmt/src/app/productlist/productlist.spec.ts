<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlist } from './productlist';

describe('Productlist', () => {
  let component: Productlist;
  let fixture: ComponentFixture<Productlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlist } from './productlist';

describe('Productlist', () => {
  let component: Productlist;
  let fixture: ComponentFixture<Productlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
