import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayViewComponent } from './display-view.component';

describe('DisplayViewComponent', () => {
  let component: DisplayViewComponent;
  let fixture: ComponentFixture<DisplayViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
