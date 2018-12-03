import { Component } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private authService: AuthService) {}

  onStoreRecipes() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
  onFetchRecipes() {
    this.dataStorageService.fetchRecipes();
  }
  onLogout() {
    this.authService.logout();
  }
}
