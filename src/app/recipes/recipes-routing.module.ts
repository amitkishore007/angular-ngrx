import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [ 
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class RecipesRoutingModule {}