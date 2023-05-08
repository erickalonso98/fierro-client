import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeIronDetailComponent } from './type-iron-detail.component';

describe('TypeIronDetailComponent', () => {
  let component: TypeIronDetailComponent;
  let fixture: ComponentFixture<TypeIronDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeIronDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeIronDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
