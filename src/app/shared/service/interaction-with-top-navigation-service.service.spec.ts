import { TestBed } from '@angular/core/testing';

import { InteractionWithTopNavigationServiceService } from './interaction-with-top-navigation-service.service';

describe('InteractionWithTopNavigationServiceService', () => {
  let service: InteractionWithTopNavigationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteractionWithTopNavigationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
