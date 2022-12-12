import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdReportFormComponent } from './id-report-form.component';

describe('IdReportFormComponent', () => {
  let component: IdReportFormComponent;
  let fixture: ComponentFixture<IdReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
