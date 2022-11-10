import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyIronComponent } from './property-iron.component';

describe('PropertyIronComponent', () => {
  let component: PropertyIronComponent;
  let fixture: ComponentFixture<PropertyIronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyIronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyIronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
