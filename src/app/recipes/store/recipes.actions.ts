import { Recipe } from './../recipe.model';
import { Ingredient } from './../../shared/ingredient.model';
import { Action } from '@ngrx/store';

export const FETCH_RECIPES = "[BACKEND] FETCH_RECIPES";
export const ADD_RECIPE = "[BACKEND] ADD_RECIPE";
export const ADD_RECIPES = "[BACKEND] ADD_RECIPES";
export const SAVE_RECIPES = "[BACKEND] SAVE_RECIPES";
export const DELETE_RECIPE = "[BACKEND] DELETE_RECIPE";
export const SEND_TO_SHOPPING_LIST = "[BACKEND] SEND_TO_SHOPPING_LIST";
export const SELECT_RECIPE = "[BACKEND] SELECT_RECIPE";
export const UPDATE_RECIPE = "[BACKEND] UPDATE_RECIPE";
export const RECIPE_START_EDIT = "[BACKEND] RECIPE_START_EDIT";
export const RECIPE_COMPLETED_EDIT = "[BACKEND] RECIPE_COMPLETED_EDIT";


export class FetchRecipes implements Action {
    readonly type = FETCH_RECIPES;

    constructor() {}
}

export class SaveRecipes implements Action {
    readonly type = SAVE_RECIPES;
}

export class DeleteRecipe implements Action {
    readonly type = DELETE_RECIPE;

    constructor(public payload: number) {}
}

export class SendToShoppingList implements Action {
    readonly type = SEND_TO_SHOPPING_LIST;

    constructor(public payload: Ingredient[]) {}
}

export class SelectRecipe implements Action {
    readonly type = SELECT_RECIPE;

    constructor(public payload: number) { }
}

export class UpdateRecipe implements Action {
    readonly type = UPDATE_RECIPE;

    constructor(public payload: {index: number, recipe: Recipe}) { }
}

export class StartEditRecipe implements Action {
    readonly type = RECIPE_START_EDIT;

    constructor(public payload: {index: number, recipe: Recipe}) { }
}
export class CompletedEditRecipe implements Action {
    readonly type = RECIPE_COMPLETED_EDIT;

    constructor() { }
}

export class AddRecipe implements Action {
    readonly type = ADD_RECIPE;

    constructor(public payload: Recipe) {}
}

export class AddRecipes implements Action {
    readonly type = ADD_RECIPES;

    constructor(public payload: Recipe[]) {}
}

export type RecipesActions = FetchRecipes 
                           | SaveRecipes 
                           | DeleteRecipe 
                           | SendToShoppingList 
                           | SelectRecipe 
                           | UpdateRecipe 
                           | StartEditRecipe 
                           | CompletedEditRecipe
                           | AddRecipe
                           | AddRecipes