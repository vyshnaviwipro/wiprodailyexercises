import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3Component } from './ex3.component';

describe('Ex3Component', () => {
  let component: Ex3Component;
  let fixture: ComponentFixture<Ex3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
