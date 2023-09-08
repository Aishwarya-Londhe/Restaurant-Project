import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector : "app-header",
    templateUrl : "./header.component.html",
    styleUrls : ['./header.component.css']
})

export class HeaderComponent {
    // @Output() tellToParentApp = new EventEmitter();

    // navigate(page : string){
    //     // console.log('navigate trigger', page);
    //     this.tellToParentApp.emit(page)
    // }
}