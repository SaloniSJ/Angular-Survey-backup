import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfirmForgotPasswordComponent } from './user-confirm-forgot-password.component';

describe('UserConfirmForgotPasswordComponent', () => {
  let component: UserConfirmForgotPasswordComponent;
  let fixture: ComponentFixture<UserConfirmForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConfirmForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfirmForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
