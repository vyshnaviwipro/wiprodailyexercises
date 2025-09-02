<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productadd } from './productadd';

describe('Productadd', () => {
  let component: Productadd;
  let fixture: ComponentFixture<Productadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productadd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productadd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productadd } from './productadd';

describe('Productadd', () => {
  let component: Productadd;
  let fixture: ComponentFixture<Productadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productadd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productadd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
