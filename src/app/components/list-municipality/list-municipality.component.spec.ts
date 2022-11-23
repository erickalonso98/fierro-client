import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMunicipalityComponent } from './list-municipality.component';

describe('ListMunicipalityComponent', () => {
  let component: ListMunicipalityComponent;
  let fixture: ComponentFixture<ListMunicipalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMunicipalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
