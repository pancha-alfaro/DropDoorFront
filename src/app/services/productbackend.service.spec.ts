import { TestBed } from '@angular/core/testing';

import { ProductbackendService } from './productbackend.service';

describe('ProductbackendService', () => {
  let service: ProductbackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductbackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
