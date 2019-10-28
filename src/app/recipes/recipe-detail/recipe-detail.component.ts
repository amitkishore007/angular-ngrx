import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import * as RecipeState from '../store/recipes.state';
import * as RecipesActions from '../store/recipes.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as ShoppingListState from '../../shopping-list/store/shopping-list.state';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;

  recipeSub:Subscription;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<RecipeState.RecipeState>) {
  }

  ngOnInit() {
    this.recipeSub = this.store.select('recipes').subscribe((result:any) => {
      if(result.selectedRecipe) {
        this.recipe = result.selectedRecipe;
      }
    });

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.store.dispatch(new RecipesActions.SelectRecipe(this.id));
          
        }
      );

    
  }

  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListActions.Addingredients(this.recipe.ingredients));

  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.recipeSub.unsubscribe(); 
  }

}
