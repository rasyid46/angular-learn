import { EventEmitter } from '@angular/core';

import {Recipe } from './recipe.model';

export class ReceipeService {
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test','https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg'),
        new Recipe('b Test Recipe','This is simply a test','https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg'),
        new Recipe('c Test Recipe','This is simply a test','https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg'),
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}