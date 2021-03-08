import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SculpturesComponent } from './sculptures.component';

describe('SculpturesComponent', () => {
  let component: SculpturesComponent;
  let fixture: ComponentFixture<SculpturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SculpturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SculpturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
