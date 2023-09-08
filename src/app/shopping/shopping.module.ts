import { NgModule } from "@angular/core";
import { ShoppingComponent } from "./shopping.component";
import { ShoppingFormComponent } from "./shopping-form/shopping-form.component";
import { IngredientListComponent } from "./ingredient-list/ingredient-list.component";
import { IngredientItemComponent } from "./ingredient-list/ingredient-item/ingredient-item.component";
import { SharedModule } from "../shared/module/shared.module";
import { ShoppingRoutingModule } from "./shopping-routing.module";

@NgModule({
    declarations : [
        ShoppingComponent,
        ShoppingFormComponent,
        IngredientListComponent,
        IngredientItemComponent
    ],
    imports : [
        SharedModule,
        ShoppingRoutingModule
    ]
})

export class ShoppingModule{}