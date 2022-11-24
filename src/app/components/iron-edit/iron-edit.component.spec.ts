import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronEditComponent } from './iron-edit.component';

describe('IronEditComponent', () => {
  let component: IronEditComponent;
  let fixture: ComponentFixture<IronEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
