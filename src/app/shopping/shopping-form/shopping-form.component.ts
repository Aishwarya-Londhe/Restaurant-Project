import { Component, EventEmitter, Output, ViewChild } from '@angular/core'
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
    selector : "app-shopping-form",
    templateUrl : "./shopping-form.component.html",
    styleUrls : ["./shopping-form.component.css"]
})

export class ShoppingFormComponent{
    @ViewChild('myForm') myFormObj : any;
    @ViewChild('ingredName') ingredName : any;
    @ViewChild('ingredBrand') ingredBrand : any;
    @ViewChild('ingredQty') ingredQty : any;
    @ViewChild('ingredPrice') ingredPrice : any;
    @ViewChild('ingredImg') ingredImg : any;
    // @Output() tellToParentShopping = new EventEmitter();
    constructor( private shopServe : ShoppingService) {}
    createIngredient(){
        const newIng = new Ingredient(this.myFormObj.value.ingredName, this.myFormObj.value.ingredQty, this.myFormObj.value.iBrand, this.myFormObj.value.iPrice, this.myFormObj.value.iImg)
        // this.tellToParentShopping.emit(newIng)
        this.shopServe.addNewIngredientToList(newIng)
        this.myFormObj.form.reset();
    }

    addDefaultQuantity(){
    this.myFormObj.form.patchValue({  // this the difference betn patchvalue and setvalue patchvalue is inside the form 
        ingredQty : '1'
    })
    }

    setDefaultValues(){
    this.myFormObj.setValue({
        ingredName: "Rava",
        ingredBrand: "Samrat",
        ingredQty: "5",
        ingredPrice: "150",
        ingredImg: "https://m.media-amazon.com/images/I/61EFHFnPiIL._SX679_.jpg"
    })
    }
}