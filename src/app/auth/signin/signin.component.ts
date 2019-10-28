import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

import * as AuthState from '../store/auth.state';
import * as AuthActions from '../store/auth.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authState:Observable<boolean>;

  constructor(private authService: AuthService, private store: Store<AuthState.State>) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    // this.authService.signinUser(email, password);
    this.store.dispatch(new AuthActions.TrySignIn({email, password}));
  }

}
