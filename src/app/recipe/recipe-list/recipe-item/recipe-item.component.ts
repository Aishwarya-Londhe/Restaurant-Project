import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
    selector : 'app-recipe-item',
    templateUrl : './recipe-item.component.html',
    styleUrls : ['./recipe-item.component.css']
})

export class RecipeItemComponent{
    @Input() rec : any;
    @Input() recIndex : any;
    // @Output() telltoParent = new EventEmitter();
    // constructor( private recipeServe : RecipeService) {}
    // recipeItemClicked(){
    //     // console.log('recipeItemClicked trigger');
    //     // this.telltoParent.emit()
    //     this.recipeServe.selectedRecipeHandler.emit(this.rec)
    // }

}