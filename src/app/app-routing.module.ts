import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { NoRecipeComponent } from './recipe/no-recipe/no-recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeFormComponent } from './recipe/recipe-form/recipe-form.component';

// const routes: Routes = [
//   { path : 'recipe', component : RecipeComponent, children : [
//     { path : '', component : NoRecipeComponent },
//     { path : 'new-recipe', component : RecipeFormComponent},
//     { path : ':selectedRecipeIndex', component : RecipeDetailsComponent },
//     { path : ':selectedRecipeIndex/edit-recipe', component : RecipeFormComponent}
//   ]},
//   { path : 'shopping', component : ShoppingComponent }
// ];

const routes: Routes =[
  { path : 'recipe', loadChildren : ()=>{return import('./recipe/recipe.module').then((m : any)=>{return m.RecipeModule})}},
  { path : 'shopping', loadChildren : ()=>{return import('./shopping/shopping.module').then((m : any)=>{return m.ShoppingModule})}},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// LAZY LOADING is a feature in Angular that allows you to load modules or components asynchronously, on-demand, when they are needed, instead of loading everything upfront when the application starts.