import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingsComponent } from './paintings.component';

describe('PaintingsComponent', () => {
  let component: PaintingsComponent;
  let fixture: ComponentFixture<PaintingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
