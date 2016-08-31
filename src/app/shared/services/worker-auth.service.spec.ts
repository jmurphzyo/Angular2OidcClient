/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { WorkerAuthService } from './worker-auth.service';

describe('Service: WorkerAuth', () => {
  beforeEach(() => {
    addProviders([WorkerAuthService]);
  });

  it('should ...',
    inject([WorkerAuthService],
      (service: WorkerAuthService) => {
        expect(service).toBeTruthy();
      }));
});
