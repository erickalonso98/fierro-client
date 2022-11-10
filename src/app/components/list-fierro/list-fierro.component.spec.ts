import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFierroComponent } from './list-fierro.component';

describe('ListFierroComponent', () => {
  let component: ListFierroComponent;
  let fixture: ComponentFixture<ListFierroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFierroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFierroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
