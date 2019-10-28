import { HttpClientModule } from '@angular/common/http';
import { RecipeEffects } from './store/recipes.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './../shared/shared.module';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { recipeReducer } from './store/recipes.reducer';

@NgModule({
    declarations: [
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeListComponent,
        RecipeStartComponent,
        RecipesComponent,
        RecipeItemComponent
    ],
    imports: [ CommonModule,
               RecipesRoutingModule,
               ReactiveFormsModule,
               HttpClientModule,
               SharedModule,
               StoreModule.forFeature('recipes', recipeReducer),
               EffectsModule.forFeature([RecipeEffects])
             ],
    exports: [],
    providers: [],
})
export class RecipesModule {}