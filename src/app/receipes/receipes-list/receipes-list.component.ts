import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import {Recipe} from  '../recipe.model'; 
@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css']
})
export class ReceipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe : Recipe){
    console.log('aaa');
    this.recipeWasSelected.emit(recipe);
  }

}
