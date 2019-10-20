import * as shoppingListState from '../shopping-list/store/shopping-list.state';
import * as authState from '../auth/store/auth.state';

export interface AppState {
    shoppingList: shoppingListState.State,
    auth: authState.State
}