import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCurpComponent } from './report-curp.component';

describe('ReportCurpComponent', () => {
  let component: ReportCurpComponent;
  let fixture: ComponentFixture<ReportCurpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCurpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCurpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
