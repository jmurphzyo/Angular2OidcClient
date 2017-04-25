import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: 'protected.component.html',
  styleUrls: ['protected.component.scss']
})
export class ProtectedComponent implements OnInit {
  constructor(private location: Location, private authService: AuthService) { }

  ngOnInit() {
  }

  goback() {
    this.location.back();
  }

}
