import { EventEmitter } from "@angular/core";
import { Ingredient } from "../model/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingService{
    private shoppingDataList = [
        new Ingredient('Oil', 5, '135', 'Gemini', 'https://ournagpur.com/wp-content/uploads/2022/08/Gemini-New-Logo.jpg'),
        new Ingredient('Salt', 1, '20', 'Tata', 'https://www.agnifoods.co.uk/pub/media/codazon_cache/brand/250x/agni_skin/brand-logo/tata-salt-logo.png'),
        new Ingredient('Turmeric', 3, '50', 'Sampanna', 'https://www.tatachemicals.com/upload/images/Tata-Sampann.jpg')
    ]
    // shoppingListEmitter = new EventEmitter();
    shoppingListObs = new Subject();
    getShoppingList(){
        return this.shoppingDataList.slice();
    }
    addNewIngredientToList( newIngred : any ){
        this.shoppingDataList.push(newIngred)
        console.log(this.shoppingDataList);
        // this.shoppingListEmitter.emit(this.shoppingDataList.slice())
        this.shoppingListObs.next(this.shoppingDataList.slice())
    }
}