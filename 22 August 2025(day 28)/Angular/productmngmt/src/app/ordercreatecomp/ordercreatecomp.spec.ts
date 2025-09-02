<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ordercreatecomp } from './ordercreatecomp';

describe('Ordercreatecomp', () => {
  let component: Ordercreatecomp;
  let fixture: ComponentFixture<Ordercreatecomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ordercreatecomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ordercreatecomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ordercreatecomp } from './ordercreatecomp';

describe('Ordercreatecomp', () => {
  let component: Ordercreatecomp;
  let fixture: ComponentFixture<Ordercreatecomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ordercreatecomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ordercreatecomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
