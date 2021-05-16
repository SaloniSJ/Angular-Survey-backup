import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainBannerComponent } from './plain-banner.component';

describe('PlainBannerComponent', () => {
  let component: PlainBannerComponent;
  let fixture: ComponentFixture<PlainBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
