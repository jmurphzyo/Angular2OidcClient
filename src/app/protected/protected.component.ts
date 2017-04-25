import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: 'protected.component.html',
  styleUrls: ['protected.component.scss']
})
export class ProtectedComponent implements OnInit {

  baseUrl: string = 'http://localhost:61138';
  values: string;
  constructor(private location: Location, private authService: AuthService) { }

  ngOnInit() {
  }

  getSecureValue() {
    this.authService.AuthGet(this.baseUrl + '/values').subscribe((response => {
      this.values = response.json();
    }));

  }

  goback() {
    this.location.back();
  }

}
