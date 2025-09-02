<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveforms2 } from './reactiveforms2';

describe('Reactiveforms2', () => {
  let component: Reactiveforms2;
  let fixture: ComponentFixture<Reactiveforms2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactiveforms2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactiveforms2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveforms2 } from './reactiveforms2';

describe('Reactiveforms2', () => {
  let component: Reactiveforms2;
  let fixture: ComponentFixture<Reactiveforms2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactiveforms2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactiveforms2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
