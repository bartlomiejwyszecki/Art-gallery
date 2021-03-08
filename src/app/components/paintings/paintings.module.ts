import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaintingsComponent } from './paintings.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: PaintingsComponent }
]

@NgModule({
  declarations: [ PaintingsComponent ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes) ]
})
export class PaintingsModule { }
