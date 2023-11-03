import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificationComponent } from './view-specification.component';

describe('ViewSpecificationComponent', () => {
  let component: ViewSpecificationComponent;
  let fixture: ComponentFixture<ViewSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpecificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
