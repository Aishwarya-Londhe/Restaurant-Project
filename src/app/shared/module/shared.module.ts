import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports : [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports : [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
})

export class SharedModule{}