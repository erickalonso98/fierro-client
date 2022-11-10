import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIronsComponent } from './list-irons.component';

describe('ListIronsComponent', () => {
  let component: ListIronsComponent;
  let fixture: ComponentFixture<ListIronsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIronsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
