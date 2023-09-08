import { NgModule } from "@angular/core";
import { RecipeComponent } from "./recipe.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { NoRecipeComponent } from "./no-recipe/no-recipe.component";
import { RecipeFormComponent } from "./recipe-form/recipe-form.component";
import { SharedModule } from "../shared/module/shared.module";
import { RouterModule, Routes } from "@angular/router";

const recipeRoute : Routes = [
    { path : '', component : RecipeComponent, children : [
        { path : '', component : NoRecipeComponent},
        { path : 'new-recipe', component : RecipeFormComponent},
        { path : ':selectedRecipeIndex', component : RecipeDetailsComponent},
        { path : ':selectedRecipeIndex/edit-recipe', component : RecipeFormComponent}
    ]}
]

@NgModule({
    declarations : [
        RecipeComponent,
        RecipeListComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        NoRecipeComponent,
        RecipeFormComponent
    ],
    imports : [
        SharedModule,
        RouterModule.forChild(recipeRoute)
    ]
})

export class RecipeModule{}