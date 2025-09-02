<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxMsgComponent } from './checkbox-msg';

describe('CheckboxMsgComponent', () => {
  let component: CheckboxMsgComponent;
  let fixture: ComponentFixture<CheckboxMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxMsgComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxMsgComponent } from './checkbox-msg';

describe('CheckboxMsgComponent', () => {
  let component: CheckboxMsgComponent;
  let fixture: ComponentFixture<CheckboxMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxMsgComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
