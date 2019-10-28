import * as RecipeState from './../store/recipes.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

import * as RecipesActions from '../store/recipes.actions';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<RecipeState.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new RecipesActions.FetchRecipes());
    this.subscription = this.store.select('recipes').subscribe((recipes:any) => {
      this.recipes = recipes.recipes;
    });
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
