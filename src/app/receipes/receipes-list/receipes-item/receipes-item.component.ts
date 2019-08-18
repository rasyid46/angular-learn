import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from  '../../recipe.model'; 
import { ReceipeService } from '../../receipe.service';
@Component({
  selector: 'app-receipes-item',
  templateUrl: './receipes-item.component.html',
  styleUrls: ['./receipes-item.component.css']
})
export class ReceipesItemComponent implements OnInit {
@Input()recipe: Recipe;
// @Output() recipeSelected = new EventEmitter<void>(); 
constructor(private recipeService : ReceipeService) { }

  ngOnInit() {
  }

  onSelected(){ 
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
