import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayHighComponent } from './pay-high.component';

describe('PayHighComponent', () => {
  let component: PayHighComponent;
  let fixture: ComponentFixture<PayHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayHighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
