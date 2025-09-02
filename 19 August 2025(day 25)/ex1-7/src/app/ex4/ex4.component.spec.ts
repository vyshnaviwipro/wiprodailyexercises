<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Component } from './ex4.component';

describe('Ex4Component', () => {
  let component: Ex4Component;
  let fixture: ComponentFixture<Ex4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Component } from './ex4.component';

describe('Ex4Component', () => {
  let component: Ex4Component;
  let fixture: ComponentFixture<Ex4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
