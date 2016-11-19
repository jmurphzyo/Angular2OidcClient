/* tslint:disable:no-unused-variable */
/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { UnauthorizedComponent } from './unauthorized.component';
import { Location, CommonModule, LocationStrategy } from '@angular/common';
import { SpyLocation } from '@angular/common/testing/location_mock';
import { AuthService } from '../shared/services/auth.service';
import { HttpModule } from '@angular/http';

// describe('UnauthorizedComponent', () => {
//   let component: UnauthorizedComponent;
//   let fixture: ComponentFixture<UnauthorizedComponent>;

//   beforeEach(async(() => {
//     var location = new SpyLocation();
//     TestBed.configureTestingModule({
//       declarations: [UnauthorizedComponent],
//       providers: [AuthService]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UnauthorizedComponent);

//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create',  () => {
//     expect(component).toBeTruthy();
//   });
// });

