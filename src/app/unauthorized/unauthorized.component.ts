import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: 'unauthorized.component.html',
  styleUrls: ['unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {
  //, private location:Location
  constructor(private location:Location, private service: AuthService) {

  }

  ngOnInit() {
  }

  login() {
    this.service.startSigninMainWindow();
  }

  goback() {
    // this.location.back();
  }
}
