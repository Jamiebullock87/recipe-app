import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { AuthService } from 'src/app/auth/auth.service';
import * as ShoppingListActions from '../../shopping-list/ngrx/shopping-list.actions';
import * as fromShoppingList from '../../shopping-list/ngrx/shopping-list.reducers';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, AfterViewChecked {
  recipe: Recipe;
  recipeId: number;
  @ViewChild('method', { read: ElementRef }) textArea: ElementRef;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private store: Store<fromShoppingList.AppState>
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.recipeId = +params['id'];
          this.recipe = this.recipeService.getRecipeId(this.recipeId);
        }
      );
  }
  ngAfterViewChecked() { // sizes the text area for the method
    const textArea = this.textArea.nativeElement;
    textArea.style.overflow = 'hidden';
    textArea.style.height = textArea.scrollHeight + 'px';
    console.log(textArea.scrollHeight);
  }

  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.recipeId, 'edit'], {relativeTo: this.route});  more complicated version of same thing above
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipes']);
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
