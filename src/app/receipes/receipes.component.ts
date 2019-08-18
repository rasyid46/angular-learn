import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [ReceipeService]
})
export class ReceipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService : ReceipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe : Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
