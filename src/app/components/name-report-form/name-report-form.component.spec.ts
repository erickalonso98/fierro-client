import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameReportFormComponent } from './name-report-form.component';

describe('NameReportFormComponent', () => {
  let component: NameReportFormComponent;
  let fixture: ComponentFixture<NameReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
