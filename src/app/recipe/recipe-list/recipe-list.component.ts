import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Recipe } from 'src/app/shared/model/recipe.model'
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
    recipeList: Recipe[] = [];
    // @Output() tellToParentRecipe = new EventEmitter();

    constructor(private recipeServe: RecipeService) { }
    ngOnInit(): void {  
        // this.recipeList = this.recipeServe.getRecipeList();
     this.recipeServe.recipeSub.subscribe((recipe: any) => {
        this.recipeList = recipe
    })
    }

    // listenFromChild(recData : any){
    //     // console.log('listenFromChild trigger', recData);
    //     this.tellToParentRecipe.emit(recData)
    // }
}