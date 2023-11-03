import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductPopupComponent } from './addproduct-popup.component';

describe('AddproductPopupComponent', () => {
  let component: AddproductPopupComponent;
  let fixture: ComponentFixture<AddproductPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
