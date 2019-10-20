import { Ingredient } from 'src/app/shared/ingredient.model';
import { Action } from '@ngrx/store';

export const ADD_INGREDIENT = '[BACKEND] ADD_INGREDIENT';
export const ADD_INGREDIENTS = '[BACKEND] ADD_INGREDIENTS';
export const DELETE_INGREDIENT = '[BACKEND] DELETE_INGREDIENT';
export const UPDATE_INGREDIENT = '[BACKEND] UPDATE_INGREDIENT';
export const START_EDIT = '[INGREDIENT] START_EDIT';
export const EDIT_COMPLETED = '[INGREDIENT] EDIT_COMPLETED';

export class Addingredient implements Action {
    readonly type  = ADD_INGREDIENT;

    constructor(public payload:Ingredient){}
}

export class Addingredients implements Action {
    readonly type = ADD_INGREDIENTS;

    constructor(public payload: Ingredient[]) {}
}

export class Updateingredients implements Action {
    readonly type = UPDATE_INGREDIENT;

    constructor(public payload: { ingredient: Ingredient, index: number }) {}
}

export class Deleteingredients implements Action {
    readonly type = DELETE_INGREDIENT;

    constructor(public payload: number) {}
}

export class StartEdit implements Action {
    readonly type = START_EDIT;

    constructor(public payload: number) {}
}

export class EditCompleted implements Action {
    readonly type = EDIT_COMPLETED;
}


export type shoppingListActions = Addingredient | Addingredients | Updateingredients | Deleteingredients | StartEdit | EditCompleted;