import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfcReportFormComponent } from './rfc-report-form.component';

describe('RfcReportFormComponent', () => {
  let component: RfcReportFormComponent;
  let fixture: ComponentFixture<RfcReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfcReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfcReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
