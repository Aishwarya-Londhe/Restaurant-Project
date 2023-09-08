import { EventEmitter } from "@angular/core";
import { Recipe } from "../model/recipe.model";
import { BehaviorSubject, Observable, Subject, map, of } from "rxjs";

export class RecipeService {
    recipeDataList: Recipe[] = [
        new Recipe('Pohe', 'A morning snack for quick fill up', 'https://thespicycafe.com/wp-content/uploads/2021/10/Maharashtrian-Breakfast-Recipe-Vegan-Vegetarian-768x1024.jpg', '10'),
        new Recipe('Dosa', 'A south indian dish created with rice and udad dal batter', 'https://www.ticklingpalates.com/wp-content/uploads/2022/03/plain-dosa-with-dosa-batter-made-in-mixie-jar.jpg', '20'),
        new Recipe('Dal Bati', 'A north Maharashtrian snack for auspicious occasion', 'https://www.ammakithaali.com/wp-content/uploads/2022/07/dalbtichrma.jpg', '180')
    ];
    // selectedRecipeHandler = new EventEmitter();
    recipeSub = new BehaviorSubject(this.recipeDataList.slice())

    getRecipeObjUsingIndex(ind: number) {
        return this.recipeDataList.slice()[ind]
    }

    // getRecipeList(){
    //     return this.recipeDataList.slice()
    // }

    addNewRecipe(rec : Recipe){
        this.recipeDataList.push(rec);
        this.recipeSub.next(this.recipeDataList.slice())
        console.log(this.recipeDataList)
    }
    updateExistingRecipe(recIndex : number, updatedRecObj : any){
        this.recipeDataList[recIndex] = updatedRecObj;
        this.recipeSub.next(this.recipeDataList.slice())
    }
}