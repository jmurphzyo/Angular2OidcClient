/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ProtectedComponent } from './protected.component';
import { Location, CommonModule, LocationStrategy } from '@angular/common';
import { MockLocationStrategy } from '@angular/common/testing';
import { SpyLocation } from '@angular/common/testing/location_mock';

describe('ProtectedComponent', () => {
  let component: ProtectedComponent;
  let fixture: ComponentFixture<ProtectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectedComponent],
      providers: [{provide:Location,useClass:SpyLocation}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
