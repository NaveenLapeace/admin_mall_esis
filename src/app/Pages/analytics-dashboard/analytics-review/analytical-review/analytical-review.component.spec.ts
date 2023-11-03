import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalReviewComponent } from './analytical-review.component';

describe('AnalyticalReviewComponent', () => {
  let component: AnalyticalReviewComponent;
  let fixture: ComponentFixture<AnalyticalReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticalReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticalReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
