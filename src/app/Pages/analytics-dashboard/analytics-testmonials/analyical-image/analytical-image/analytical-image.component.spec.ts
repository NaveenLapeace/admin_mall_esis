import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalImageComponent } from './analytical-image.component';

describe('AnalyticalImageComponent', () => {
  let component: AnalyticalImageComponent;
  let fixture: ComponentFixture<AnalyticalImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticalImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticalImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
