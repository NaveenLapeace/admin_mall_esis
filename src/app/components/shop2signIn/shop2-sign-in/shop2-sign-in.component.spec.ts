import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop2SignInComponent } from './shop2-sign-in.component';

describe('Shop2SignInComponent', () => {
  let component: Shop2SignInComponent;
  let fixture: ComponentFixture<Shop2SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shop2SignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shop2SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
