import { AppState } from './../../store/app.state';
import { Recipe } from './../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';


export interface RecipeState extends AppState {
    recipes: State
}

export interface State { 
    recipes: Recipe[],
    selectedRecipe: Recipe,
    selectedRecipeIndex:number
}

export const initialState: State = {
    recipes: [],
    selectedRecipe: null,
    selectedRecipeIndex: -1
}