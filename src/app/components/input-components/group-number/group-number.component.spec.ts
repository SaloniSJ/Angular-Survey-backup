import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupNumberComponent } from './group-number.component';

describe('GroupNumberComponent', () => {
  let component: GroupNumberComponent;
  let fixture: ComponentFixture<GroupNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
