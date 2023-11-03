import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenProductPopupComponent } from './open-product-popup.component';

describe('OpenProductPopupComponent', () => {
  let component: OpenProductPopupComponent;
  let fixture: ComponentFixture<OpenProductPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenProductPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenProductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
