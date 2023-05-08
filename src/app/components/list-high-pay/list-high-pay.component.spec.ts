import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHighPayComponent } from './list-high-pay.component';

describe('ListHighPayComponent', () => {
  let component: ListHighPayComponent;
  let fixture: ComponentFixture<ListHighPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHighPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHighPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
