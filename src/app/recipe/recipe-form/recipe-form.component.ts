import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  isNewRecipe : any;
  currentRecipeIndex : any;
  recipeForm : any;

  constructor( private activeRoute : ActivatedRoute, private recipeServ : RecipeService, private router : Router) {}

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      rName : new FormControl('', Validators.required),
      rDesc : new FormControl('', [Validators.required, Validators.minLength(20)]),
      rImgPath : new FormControl('', Validators.required),
      rPrep : new FormControl('', Validators.required)
    })
    this.activeRoute.params.subscribe((param : Params)=>{
      if(param['selectedRecipeIndex']){
        this.isNewRecipe = false;
        this.currentRecipeIndex = param['selectedRecipeIndex'];
        let currentRecipe = this.recipeServ.getRecipeObjUsingIndex(+this.currentRecipeIndex);
        this.recipeForm.setValue({
          rName : currentRecipe.name,
          rDesc : currentRecipe.desc,
          rImgPath : currentRecipe.imgPath,
          rPrep : currentRecipe.preparationTime
        })
      }else{
        this.isNewRecipe = true
      }
    })
  }

  onSubmit(){
    let rec = this.recipeForm.value;
    let recipeObj = new Recipe(rec.rName, rec.rDesc, rec.rImgPath, rec.rPrep)
    if(this.isNewRecipe){
      this.recipeServ.addNewRecipe(recipeObj)
    } else {
      // update karo existing recipe ko
      this.recipeServ.updateExistingRecipe(+this.currentRecipeIndex, recipeObj)
    }
    console.log(this.recipeForm)
    // this.recipeForm.reset();
    // this.router.navigate(['/recipe'])
  }
}
