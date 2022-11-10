import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighAltaComponent } from './high-alta.component';

describe('HighAltaComponent', () => {
  let component: HighAltaComponent;
  let fixture: ComponentFixture<HighAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
