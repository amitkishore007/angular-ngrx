import { HomeComponent } from './core/home/home.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component:HomeComponent , pathMatch: 'full' },
  { path: 'recipes', loadChildren:'./recipes/recipes.module#RecipesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
