import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg'),
    new Recipe('Second Test', 'Second test desc', 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg'),
    new Recipe('Third Test', 'Third test desc', 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
