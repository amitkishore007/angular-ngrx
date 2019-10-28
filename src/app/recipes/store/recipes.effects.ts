import { Store } from '@ngrx/store';
import { RecipeService } from './../recipe.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as RecipeActions from './recipes.actions';
import * as RecipeState from './recipes.state';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import { of } from 'rxjs';

@Injectable()
export class RecipeEffects {

    @Effect()
    fetchRecipes$ = this.actions$.pipe(
        ofType(RecipeActions.FETCH_RECIPES),
        switchMap((action: RecipeActions.FetchRecipes) => {
            return this.recipeService.getRecipes();
        }),
        map((recipes: Recipe[]) => {
            
            return {
                type: RecipeActions.ADD_RECIPES,
                payload: recipes
            }
        })
    )

    @Effect({dispatch:false})
    saveRecipes$ = this.actions$.pipe(
        ofType(RecipeActions.SAVE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([action, state]) => {
            return this.recipeService.saveRecipes(state.recipes);
        })
    )

    constructor(private actions$: Actions, private recipeService: RecipeService, private store: Store<RecipeState.RecipeState>) {}
}