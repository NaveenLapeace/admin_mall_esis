import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBrandPopupComponent } from './open-brand-popup.component';

describe('OpenBrandPopupComponent', () => {
  let component: OpenBrandPopupComponent;
  let fixture: ComponentFixture<OpenBrandPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenBrandPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenBrandPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
