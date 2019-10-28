import { Component, OnInit } from "@angular/core";

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import * as AppState from '../../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AuthState from '../../auth/store/auth.state';
import * as AuthAction from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipes.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authState: Observable<AuthState.State>;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private store: Store<AppState.AppState>) {
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new RecipeActions.SaveRecipes());
    // this.dataStorageService.storeRecipes()
    //   .subscribe(
    //     (response: Response) => {
    //       console.log(response);
    //     }
    //   );
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
    // this.dataStorageService.getRecipes();
  }

  onLogout() {
    // this.authService.logout();
    this.store.dispatch(new AuthAction.Logout());
  }
}
