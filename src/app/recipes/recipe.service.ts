import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Banging Burgers',
      'My favourite burger recipe',
      'https://www.maxpixel.net/static/photo/640/Burger-Bacon-Bun-Grilled-Food-Snack-Fast-Food-500054.jpg',
      [
        new Ingredient('Beef mince', 500, 'g'),
        new Ingredient('Pork mince', 500, 'g'),
        new Ingredient('Burger Buns', 4, 'pcs')
      ],
      'Test Method'
    ),
    new Recipe(
      'Spaghetti and Meatballs',
      'My version of an italian classic',
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Spaghetti_and_meatballs_1.jpg',
      [
        new Ingredient('Beef mince', 500, 'g'),
        new Ingredient('Pork mince', 500, 'g'),
        new Ingredient('Spaghetti', 100, 'g')
      ],
      'Test method'
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  getRecipeId(index: number) {
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
