/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('Service: Auth', () => {
  beforeEach(() => {
    addProviders([AuthService]);
  });

  it('should ...',
    inject([AuthService],
      (service: AuthService) => {
        expect(service).toBeTruthy();
      }));
});
