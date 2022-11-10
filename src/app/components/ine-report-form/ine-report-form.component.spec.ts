import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IneReportFormComponent } from './ine-report-form.component';

describe('IneReportFormComponent', () => {
  let component: IneReportFormComponent;
  let fixture: ComponentFixture<IneReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IneReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IneReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
