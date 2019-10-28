import { AuthService } from './../auth.service';
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { map, switchMap, mergeMap, catchError, tap } from 'rxjs/operators';
import { from, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffect {

    @Effect()
    login$ = this.action$.pipe(
        ofType(AuthActions.TRY_SIGNIN),
        map((action:AuthActions.TrySignIn) => {
               return action.payload;
        }),
        switchMap((authData:{email:string, password:string}) => {
            return from(this.authServie.signinUser(authData.email, authData.password));
        }),
        switchMap((result) => {
            return from(this.authServie.getCurrentUser());
        }),
        mergeMap((token:string) => {
            this.router.navigate(['/recipes']);
            return [
                {
                    type: AuthActions.SIGNIN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ]
        })
    );

    @Effect()
    signup$ = this.action$.pipe(
        ofType(AuthActions.TRY_SIGNUP),
        map((action:AuthActions.TrySignup) => {
               return action.payload;
        }),
        switchMap((authData:{email:string, password:string}) => {
            return from(this.authServie.signupUser(authData.email, authData.password));
        }),
        switchMap((result) => {
            return from(this.authServie.getCurrentUser());
        }),
        mergeMap((token:string) => {
            this.router.navigate(['/recipes']);
            return [
                {
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ]
        })
    );

    @Effect({dispatch:false})
    logout$ = this.action$.pipe(
        ofType(AuthActions.LOGOUT),
        switchMap((action: AuthActions.Logout) => {
            return from(this.authServie.logout())
        }),
        tap((res) => {
            this.router.navigate(['/']);
        })
    )

    constructor(private action$: Actions, private authServie: AuthService, private router: Router) {}

}