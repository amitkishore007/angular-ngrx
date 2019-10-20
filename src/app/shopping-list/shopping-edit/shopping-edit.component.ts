import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from "@angular/core";
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';
import * as shoppingListActions from '../store/shopping-list.actions';
import * as shoppingListState from '../store/shopping-list.state';
import { Store } from '@ngrx/store';
import * as appState from '../../store/app.state';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService, private store: Store<appState.AppState>) { }

  ngOnInit() {
    this.store.select('shoppingList')
    .subscribe((result: shoppingListState.State) => {
      if (result.editedIngredientIndex != -1) {
        this.editedItemIndex = result.editedIngredientIndex;
        this.editedItem = result.editedIngredient;
        this.editMode = true;
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
      } else {
        this.editMode = false;
      }
         
    })
    // this.subscription = this.slService.startedEditing
    //   .subscribe(
    //     (index: number) => {
    //       
    //     }
    //   );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.slService.updateIngredient(this.editedItemIndex, newIngredient);
      this.store.dispatch(new shoppingListActions.Updateingredients({ index: this.editedItemIndex, ingredient: newIngredient}));
    } else {
      // this.slService.addIngredient(newIngredient);
      this.store.dispatch(new shoppingListActions.Addingredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new shoppingListActions.EditCompleted());

  }

  onDelete() {
    // this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
    console.log(this.editedItemIndex);
    
    this.store.dispatch(new shoppingListActions.Deleteingredients(this.editedItemIndex));
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
