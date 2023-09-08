import { Component } from '@angular/core';
import { Recipe } from './shared/model/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPage : any = 'shopping';
  
  // listenFromChildHeader(eveData : any){
  //   console.log("listenFromChildHeader trigger", eveData);
  //   this.selectedPage =eveData;
  // }
}
