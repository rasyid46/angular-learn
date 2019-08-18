import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import {Recipe} from  '../recipe.model'; 
import { ReceipeService } from '../receipe.service';
@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css']
})
export class ReceipesListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] ;
  constructor(private recipeService : ReceipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe : Recipe){
  //   console.log(recipe);
  //   this.recipeWasSelected.emit(recipe);
  // }

}
