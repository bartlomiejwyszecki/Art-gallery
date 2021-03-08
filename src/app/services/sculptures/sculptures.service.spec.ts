import { TestBed } from '@angular/core/testing';

import { SculpturesService } from './sculptures.service';

describe('SculpturesService', () => {
  let service: SculpturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SculpturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
