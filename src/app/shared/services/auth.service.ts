import { Injectable, EventEmitter } from '@angular/core';
import { UserManager } from 'oidc-client';

@Injectable()
export class AuthService {
  mgr: UserManager = new UserManager(settings);
  userLoadededEvent: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
    this.mgr.getUser().then(user => {
      if (user) {
        this.userLoadededEvent.emit(user)
      }
    });
  }
  clearState() {
    this.mgr.clearStaleState().then(function () {
      console.log("clearStateState success");
    }).catch(function (e) {
      console.log("clearStateState error", e.message);
    });
  }

  getUser() {
    this.mgr.getUser().then(function (user) {
      console.log("got user", user);
      this.userLoadededEvent.emit(user);
    }).catch(function (err) {
      console.log(err);
    });
  }

  removeUser() {
    this.mgr.removeUser().then(function () {
      console.log("user removed");
    }).catch(function (err) {
      console.log(err);
    });
  }

  startSigninMainWindow() {
    this.mgr.signinRedirect({ data: 'some data' }).then(function () {
      console.log("signinRedirect done");
    }).catch(function (err) {
      console.log(err);
    });
  }

  endSigninMainWindow() {
    this.mgr.signinRedirectCallback().then(function (user) {
      console.log("signed in", user);
    }).catch(function (err) {
      console.log(err);
    });
  }

  startSigninMainWindowDiffCallbackPage() {
    this.mgr.signinRedirect({ data: 'some data', redirect_uri: 'http://localhost:5000/user-manager-sample-callback.html' }).then(function () {
      console.log("signinRedirect done");
    }).catch(function (err) {
      console.log(err);
    });
  }

  popupSignin() {
    this.mgr.signinPopup().then(function (user) {
      console.log("signed in", user);
    }).catch(function (err) {
      console.log(err);
    });
  }

  iframeSignin() {
    this.mgr.signinSilent({ data: 'some data' }).then(function (user) {
      console.log("signed in", user);
    }).catch(function (err) {
      console.log(err);
    });
  }

  startSignoutMainWindow() {
    this.mgr.signoutRedirect().then(function (resp) {
      console.log("signed out", resp);
    }).catch(function (err) {
      console.log(err);
    });
  };

  endSignoutMainWindow() {
    this.mgr.signoutRedirectCallback().then(function (resp) {
      console.log("signed out", resp);
    }).catch(function (err) {
      console.log(err);
    });
  };

}

const settings: any = {
  authority: 'http://localhost:5000/oidc',
  client_id: 'js.tokenmanager',
  redirect_uri: 'http://localhost:4200/user-manager-sample-callback.html',
  post_logout_redirect_uri: 'http://localhost:4200/',
  response_type: 'id_token token',
  scope: 'openid email roles',

  popup_redirect_uri: 'http://localhost:4200/user-manager-sample-popup.html',

  silent_redirect_uri: 'http://localhost:4200/user-manager-sample-silent.html',
  automaticSilentRenew: true,
  //silentRequestTimeout:10000,

  filterProtocolClaims: true,
  loadUserInfo: true
};
