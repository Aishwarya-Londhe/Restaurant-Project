import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../shared/services/recipe.service";

@Component({
    selector : "app-recipe",
    templateUrl : "./recipe.component.html",
    styleUrls : ["./recipe.component.css"],
    providers : [ RecipeService ]
})

export class RecipeComponent implements OnInit{
    // selectedRecipe : any;

    // constructor( private recipeServe : RecipeService) {}

    ngOnInit(): void {
        // this.recipeServe.selectedRecipeHandler.subscribe((selectedRecipeParam : any)=>{
        //     this.selectedRecipe = selectedRecipeParam
        // })
    }

    // listenFromChildList(eveData : any){
    //     // console.log('listenFromChildList trigger', eveData);
    //     this.selectedRecipe = eveData        
    // }
}