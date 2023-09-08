import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component ({
    selector : 'app-recipe-details',
    templateUrl : './recipe-details.component.html',
    styleUrls : ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {
    // @Input() currentRecipe : any; // local Api of component
    currentRecipe : any;

    constructor( private activeRoute : ActivatedRoute, private recServ : RecipeService ){}

    ngOnInit(): void {
        this.activeRoute.params.subscribe((routeParam : any)=>{
            console.log('routeParam', routeParam);
            this.currentRecipe = this.recServ.getRecipeObjUsingIndex(+routeParam.selectedRecipeIndex)
        })
    }
}