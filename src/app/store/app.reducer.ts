import { ActionReducerMap } from '@ngrx/store';
import * as appState from './app.state';
import * as shoppingListReducer from '../shopping-list/store/shopping-list.reducer';
import * as authReducer from '../auth/store/auth.reducers';

export const reducers: ActionReducerMap<appState.AppState> = {
    shoppingList: shoppingListReducer.shoppinglistReducer,
    auth: authReducer.authReducer
};
