import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaintingsComponent } from './paintings.component';
import { CommonModule } from '@angular/common';
import { PaintingsIdComponent } from './id/id.component';

const routes: Routes = [
  { path: '', component: PaintingsComponent },
  { path: 'painting/:id', component: PaintingsIdComponent }
]

@NgModule({
  declarations: [ PaintingsComponent, PaintingsIdComponent ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes) ]
})
export class PaintingsModule { }
