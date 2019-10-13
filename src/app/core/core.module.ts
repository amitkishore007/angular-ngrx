import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './../shared/shared.module';
import { ShoppingListModule } from './../shopping-list/shopping-list.module';
import { NgModule } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';
import { AppRoutingModule } from '../app-routing.module';
import { AuthModule } from '../auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [ 
        CommonModule,
        AppRoutingModule,
        AuthModule,
        ShoppingListModule,
        SharedModule 
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
})
export class CoreModule {}