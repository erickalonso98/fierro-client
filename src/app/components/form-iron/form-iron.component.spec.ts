import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIronComponent } from './form-iron.component';

describe('FormIronComponent', () => {
  let component: FormIronComponent;
  let fixture: ComponentFixture<FormIronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
