import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMunicipalityComponent } from './form-municipality.component';

describe('FormMunicipalityComponent', () => {
  let component: FormMunicipalityComponent;
  let fixture: ComponentFixture<FormMunicipalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMunicipalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
