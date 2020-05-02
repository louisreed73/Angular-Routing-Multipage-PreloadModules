import { GuitarsComponent } from './guitars.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: GuitarsComponent },
]



@NgModule({
  declarations: [
    GuitarsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class GuitarsModule { }
