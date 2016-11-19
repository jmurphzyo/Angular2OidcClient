/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { RouterTestingModule } from '@angular/router/testing';


// describe('AuthGuardService', () => {
//   let dservice:AuthGuardService;
//   beforeEach(() => {
//     let dservice = {
//       loggedIn: true
//     };
//     TestBed.configureTestingModule({
//       providers: [
//         AuthGuardService,
//         {provide: AuthService, useValue: dservice }
//       ],
//       imports:[RouterTestingModule, HttpModule]
//     });
//   });

//   it('should ...', inject([AuthGuardService], (service: AuthGuardService) => {
//     expect(service).toBeTruthy();
//   }));
// });
