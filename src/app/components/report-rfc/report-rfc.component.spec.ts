import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRfcComponent } from './report-rfc.component';

describe('ReportRfcComponent', () => {
  let component: ReportRfcComponent;
  let fixture: ComponentFixture<ReportRfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportRfcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportRfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
