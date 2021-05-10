import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellFlightsComponent } from './shell-flights.component';

describe('ShellFlightsComponent', () => {
  let component: ShellFlightsComponent;
  let fixture: ComponentFixture<ShellFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
