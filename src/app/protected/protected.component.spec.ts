/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ProtectedComponent } from './protected.component';

describe('Component: Protected', () => {
  it('should create an instance', () => {
    let component = new ProtectedComponent();
    expect(component).toBeTruthy();
  });
});
