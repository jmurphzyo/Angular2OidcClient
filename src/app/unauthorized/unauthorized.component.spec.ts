/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { UnauthorizedComponent } from './unauthorized.component';

describe('Component: Unauthorized', () => {
  it('should create an instance', () => {
    let component = new UnauthorizedComponent();
    expect(component).toBeTruthy();
  });
});
