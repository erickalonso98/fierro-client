import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenenciaDetailComponent } from './tenencia-detail.component';

describe('TenenciaDetailComponent', () => {
  let component: TenenciaDetailComponent;
  let fixture: ComponentFixture<TenenciaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenenciaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenenciaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
