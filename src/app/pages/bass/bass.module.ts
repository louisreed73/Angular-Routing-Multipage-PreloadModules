import { BassComponent } from './bass.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: BassComponent },
]



@NgModule({
  declarations: [
    BassComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class BassModule { }
