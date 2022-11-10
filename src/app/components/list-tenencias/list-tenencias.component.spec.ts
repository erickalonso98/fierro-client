import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTenenciasComponent } from './list-tenencias.component';

describe('ListTenenciasComponent', () => {
  let component: ListTenenciasComponent;
  let fixture: ComponentFixture<ListTenenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTenenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTenenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
