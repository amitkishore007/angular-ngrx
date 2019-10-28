import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

import * as AuthState from '../store/auth.state';
import * as AuthActions from '../store/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private store: Store<AuthState.State>) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    // this.authService.signupUser(email, password);
    this.store.dispatch(new AuthActions.TrySignup({email, password}))
  }

}
