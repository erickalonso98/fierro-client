import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenenciaTypeComponent } from './tenencia-type.component';

describe('TenenciaTypeComponent', () => {
  let component: TenenciaTypeComponent;
  let fixture: ComponentFixture<TenenciaTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenenciaTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenenciaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
