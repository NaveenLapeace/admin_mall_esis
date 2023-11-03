import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandChartsComponent } from './brand-charts.component';


describe('BrandChartsComponent', () => {
  let component: BrandChartsComponent;
  let fixture: ComponentFixture<BrandChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
