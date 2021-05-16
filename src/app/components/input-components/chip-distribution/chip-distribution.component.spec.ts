import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipDistributionComponent } from './chip-distribution.component';

describe('ChipDistributionComponent', () => {
  let component: ChipDistributionComponent;
  let fixture: ComponentFixture<ChipDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
