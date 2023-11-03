import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPlotChartComponent } from './product-plot-chart.component';

describe('ProductPlotChartComponent', () => {
  let component: ProductPlotChartComponent;
  let fixture: ComponentFixture<ProductPlotChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPlotChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPlotChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
