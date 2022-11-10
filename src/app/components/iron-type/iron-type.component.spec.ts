import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronTypeComponent } from './iron-type.component';

describe('IronTypeComponent', () => {
  let component: IronTypeComponent;
  let fixture: ComponentFixture<IronTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
