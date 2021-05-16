import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVerifyPhonenumberComponent } from './user-verify-phonenumber.component';

describe('UserVerifyPhonenumberComponent', () => {
  let component: UserVerifyPhonenumberComponent;
  let fixture: ComponentFixture<UserVerifyPhonenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVerifyPhonenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVerifyPhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
