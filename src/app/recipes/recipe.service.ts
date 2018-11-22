import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Banging Burgers',
      'My favourite burger recipe',
      'https://www.maxpixel.net/static/photo/640/Burger-Bacon-Bun-Grilled-Food-Snack-Fast-Food-500054.jpg',
      [
        new Ingredient('Beef mince', 500),
        new Ingredient('Pork mince', 500),
        new Ingredient('Burger Buns', 4)
      ]
    ),
    new Recipe(
      'Spaghetti and Meatballs',
      'My version of an italian classic',
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Spaghetti_and_meatballs_1.jpg',
      [
        new Ingredient('Beef mince', 500),
        new Ingredient('Pork mince', 500),
        new Ingredient('Spaghetti', 100)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
