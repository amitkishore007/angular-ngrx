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
    recipes: [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoixR6tIoJikFBa1IF29un-4_R7qlrrJXXuLByYZR-bdfH68Mx&s',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUCBO_tGVBf5Y8wFt7g9gNkJwLvnseL-7lXMR21xchdX0MCwQBQ&s',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ],
    selectedRecipe: null,
    selectedRecipeIndex: -1
}