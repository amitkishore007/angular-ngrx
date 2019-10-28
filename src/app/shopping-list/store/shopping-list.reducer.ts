import * as shoppingListActions from './shopping-list.actions';
import * as shoppingListState from './shopping-list.state';

export function shoppinglistReducer(state = shoppingListState.initialState, action: shoppingListActions.shoppingListActions) {
    switch (action.type) {
        case shoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients:[...state.ingredients, action.payload]
            }
            break;

        case shoppingListActions.START_EDIT:

            let ingredient = {...state.ingredients[action.payload]};
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: ingredient
            }
            break;
        case shoppingListActions.EDIT_COMPLETED:
            return {
                ...state,
                editedIngredient:null,
                editedIngredientIndex:-1
            }
            break;
        case shoppingListActions.DELETE_INGREDIENT:
            let ingredients = [...state.ingredients];
            ingredients.splice(action.payload, 1);
            return {
                ...state,
                ingredients: ingredients
            }
            break;

        case shoppingListActions.UPDATE_INGREDIENT:
            let oldIngredients = [...state.ingredients];
            let newIngredients = {
                ...oldIngredients[action.payload.index],
                ...action.payload.ingredient
            };
            oldIngredients[action.payload.index] = newIngredients;
            console.log(newIngredients, action);

            return {
                ...state,
                ingredients: oldIngredients
            }

            break;

        case shoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients:[...state.ingredients, ...action.payload]
            }
            break;
        default:
            return state;
            break;
    }
}