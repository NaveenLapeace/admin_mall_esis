import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalTestmonialsComponent } from './analytical-testmonials.component';

describe('AnalyticalTestmonialsComponent', () => {
  let component: AnalyticalTestmonialsComponent;
  let fixture: ComponentFixture<AnalyticalTestmonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticalTestmonialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticalTestmonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
