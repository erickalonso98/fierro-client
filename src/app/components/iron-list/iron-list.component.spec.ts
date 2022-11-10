import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronListComponent } from './iron-list.component';

describe('IronListComponent', () => {
  let component: IronListComponent;
  let fixture: ComponentFixture<IronListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
