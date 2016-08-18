import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  _user: any;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.userLoadededEvent
      .subscribe(user => {
        this._user = user;
      });
  }
  clearState() {
    this.authService.clearState();
  }
  getUser() {
    this.authService.getUser();
  }
  removeUser() {
    this.authService.removeUser();
  }
  startSigninMainWindow() {
    this.authService.startSigninMainWindow();
  }
  endSigninMainWindow() {
    this.authService.endSigninMainWindow();
  }
  startSigninMainWindowDiffCallbackPage() {
    this.authService.startSigninMainWindowDiffCallbackPage();
  }
  popupSignin() {
    this.authService.popupSignin();
  }
  iframeSignin() {
    this.authService.iframeSignin();
  }
  startSignoutMainWindow() {
    this.authService.startSignoutMainWindow();
  }
  endSignoutMainWindow() {
    this.authService.endSigninMainWindow();
  }
}
