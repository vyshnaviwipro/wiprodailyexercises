<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListComponent } from './display-list.component';

describe('DisplayListComponent', () => {
  let component: DisplayListComponent;
  let fixture: ComponentFixture<DisplayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListComponent } from './display-list.component';

describe('DisplayListComponent', () => {
  let component: DisplayListComponent;
  let fixture: ComponentFixture<DisplayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
