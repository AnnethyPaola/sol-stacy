import { TestBed } from '@angular/core/testing';

import { QueuepersonService } from './queueperson.service';

describe('QueuepersonService', () => {
  let service: QueuepersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueuepersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
