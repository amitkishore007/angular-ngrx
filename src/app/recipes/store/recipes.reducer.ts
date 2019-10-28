import { initialState } from './recipes.state';
import * as RecipesAction from './recipes.actions';

export function recipeReducer(state = initialState, action: RecipesAction.RecipesActions) {

    switch (action.type) {
        case RecipesAction.FETCH_RECIPES:
            return {
                ...state
            }
            break;
        case RecipesAction.SELECT_RECIPE:
            let recipe = state.recipes[action.payload];
            return {
                ...state,
                selectedRecipe: recipe,
                selectedRecipeIndex: action.payload
            }
            break;
        case RecipesAction.SEND_TO_SHOPPING_LIST:
            let ingredients = state.recipes;
            return {
                ...state
            }
            break;
    
        case RecipesAction.DELETE_RECIPE:
            let recipes = [...state.recipes];
            recipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: [...recipes]
            }
            break;

            
        case RecipesAction.UPDATE_RECIPE:
            let oldRecipes = [...state.recipes];
            let oldRecipe = oldRecipes[action.payload.index];
            let updatedReipe = {
                ...oldRecipe,
                ...action.payload.recipe
            };

            oldRecipes[action.payload.index] = updatedReipe;
            return {
                ...state,
                recipes: [...oldRecipes]
            }
            break;
        case RecipesAction.ADD_RECIPE:
            return {
                ...state,
                recipes:[...state.recipes, action.payload]
            };

        break;
        default:
            break;
    }
    return state;
}