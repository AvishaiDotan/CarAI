import { TestBed } from '@angular/core/testing';

import { CarAIHttpClientService } from './car-aihttp-client.service';

describe('CarAIHttpClientService', () => {
  let service: CarAIHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarAIHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
