/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AWSService } from './aws.service';

describe('Service: Aws', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AWSService]
    });
  });

  it('should ...', inject([AWSService], (service: AWSService) => {
    expect(service).toBeTruthy();
  }));
});