import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCategoruPopupComponent } from './open-categoru-popup.component';

describe('OpenCategoruPopupComponent', () => {
  let component: OpenCategoruPopupComponent;
  let fixture: ComponentFixture<OpenCategoruPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenCategoruPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenCategoruPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
