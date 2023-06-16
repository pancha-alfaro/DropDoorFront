import { TestBed } from '@angular/core/testing';

import { OpinionsbackService } from './opinionsback.service';

describe('OpinionsbackService', () => {
  let service: OpinionsbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpinionsbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
