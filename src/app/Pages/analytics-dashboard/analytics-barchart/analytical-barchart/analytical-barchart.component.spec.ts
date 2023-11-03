import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalBarchartComponent } from './analytical-barchart.component';

describe('AnalyticalBarchartComponent', () => {
  let component: AnalyticalBarchartComponent;
  let fixture: ComponentFixture<AnalyticalBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticalBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticalBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
