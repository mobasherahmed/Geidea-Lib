import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeideaLibComponent } from './geidea-lib.component';

describe('GeideaLibComponent', () => {
  let component: GeideaLibComponent;
  let fixture: ComponentFixture<GeideaLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeideaLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeideaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
