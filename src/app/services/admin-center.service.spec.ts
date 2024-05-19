import { TestBed } from '@angular/core/testing';

import { AdminCenterService } from './admin-center.service';

describe('AdminCenterService', () => {
  let service: AdminCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
