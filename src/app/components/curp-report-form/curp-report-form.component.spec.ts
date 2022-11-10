import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurpReportFormComponent } from './curp-report-form.component';

describe('CurpReportFormComponent', () => {
  let component: CurpReportFormComponent;
  let fixture: ComponentFixture<CurpReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurpReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurpReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
