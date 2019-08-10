import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from  '../../recipe.model'; 
@Component({
  selector: 'app-receipes-item',
  templateUrl: './receipes-item.component.html',
  styleUrls: ['./receipes-item.component.css']
})
export class ReceipesItemComponent implements OnInit {
@Input()recipe: Recipe;
@Output() recipeSelected = new EventEmitter<void>(); 
constructor() { }

  ngOnInit() {
  }

  onSelected(){ 
    this.recipeSelected.emit();
  }
}
