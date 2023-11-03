import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPieChartComponent } from './product-pie-chart.component';

describe('ProductPieChartComponent', () => {
  let component: ProductPieChartComponent;
  let fixture: ComponentFixture<ProductPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
