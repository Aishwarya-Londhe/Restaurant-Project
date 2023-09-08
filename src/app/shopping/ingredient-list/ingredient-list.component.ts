import { Component, Input, OnInit } from '@angular/core'
import { Ingredient } from './../../shared/model/ingredient.model';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component ({
    selector : 'app-ingredient-list',
    templateUrl : './ingredient-list.component.html',
    styleUrls : ['./ingredient-list.component.css']
})

export class IngredientListComponent implements OnInit{
    // @Input() set newIngredSetter(catchedIngredData : any){
    //     if(catchedIngredData){
    //         this.IngredientList.push(catchedIngredData)
    //     }
    // }

    IngredientList : Ingredient[] = [];

    constructor( private shopServe : ShoppingService) {}

    ngOnInit(): void {
        this.IngredientList = this.shopServe.getShoppingList();
        // this.shopServe.shoppingListEmitter.subscribe((updatedShoppingList : any)=>{
        //     this.IngredientList = updatedShoppingList;
        // })
        this.shopServe.shoppingListObs.subscribe({
            next : (updatedShoppingList : any)=>{
            this.IngredientList = updatedShoppingList;
        }
    })
    }
}