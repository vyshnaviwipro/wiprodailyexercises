<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveforms } from './reactiveforms';

describe('Reactiveforms', () => {
  let component: Reactiveforms;
  let fixture: ComponentFixture<Reactiveforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactiveforms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactiveforms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveforms } from './reactiveforms';

describe('Reactiveforms', () => {
  let component: Reactiveforms;
  let fixture: ComponentFixture<Reactiveforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactiveforms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactiveforms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
