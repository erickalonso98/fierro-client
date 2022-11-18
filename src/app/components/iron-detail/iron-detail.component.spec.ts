import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronDetailComponent } from './iron-detail.component';

describe('IronDetailComponent', () => {
  let component: IronDetailComponent;
  let fixture: ComponentFixture<IronDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
