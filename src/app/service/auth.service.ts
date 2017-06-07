import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string)
  {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
      /*.then(
        response => {
          console.log('inside service response is: ' + response);
          return response;
        }
      )
      .catch(
        error => console.log('inside service error:' + error)
      )*/
  }

  signinUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);

  }

  resetemail(email: string)
  {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }


  isAuthenticated() {
    return this.token != null;
  }
}
