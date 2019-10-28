import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from "@angular/core";
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signinUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
      // .then(
      //   response => {
      //     this.router.navigate(['/']);
      //     firebase.auth().currentUser.getIdToken()
      //       .then(
      //         (token: string) => this.token = token
      //       )
      //   }
      // )
      // .catch(
      //   error => console.log(error)
      // );
  }

  getCurrentUser() {
    return firebase.auth().currentUser.getIdToken();
  }

  logout() {
    return firebase.auth().signOut();
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
