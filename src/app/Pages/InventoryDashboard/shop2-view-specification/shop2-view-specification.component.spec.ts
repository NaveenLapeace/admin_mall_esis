import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop2ViewSpecificationComponent } from './shop2-view-specification.component';

describe('Shop2ViewSpecificationComponent', () => {
  let component: Shop2ViewSpecificationComponent;
  let fixture: ComponentFixture<Shop2ViewSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shop2ViewSpecificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shop2ViewSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
