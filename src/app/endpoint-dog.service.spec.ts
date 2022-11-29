import { TestBed } from '@angular/core/testing';

import { EndpointDogService } from './endpoint-dog.service';

describe('EndpointDogService', () => {
  let service: EndpointDogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointDogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
