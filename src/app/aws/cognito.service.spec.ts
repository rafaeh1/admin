/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CognitoService } from './cognito.service';

describe('Service: Cognito', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CognitoService]
    });
  });

  it('should ...', inject([CognitoService], (service: CognitoService) => {
    expect(service).toBeTruthy();
  }));
});