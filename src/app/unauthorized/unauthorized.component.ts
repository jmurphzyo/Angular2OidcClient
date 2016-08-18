import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: 'unauthorized.component.html',
  styleUrls: ['unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {

  constructor(private authService: AuthService, private location:Location) { }

  ngOnInit() {
  }
  Login() {
    this.authService.startSigninMainWindow();
  }
  goback(){
    this.location.back();
  }
}
