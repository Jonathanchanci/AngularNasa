import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSelectModule
 } from "@angular/material";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
