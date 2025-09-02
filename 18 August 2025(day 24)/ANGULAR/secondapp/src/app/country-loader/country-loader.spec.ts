<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLoader } from './country-loader';

describe('CountryLoader', () => {
  let component: CountryLoader;
  let fixture: ComponentFixture<CountryLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLoader } from './country-loader';

describe('CountryLoader', () => {
  let component: CountryLoader;
  let fixture: ComponentFixture<CountryLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
