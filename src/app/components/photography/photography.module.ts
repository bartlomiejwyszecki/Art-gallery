import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';
import { PhotographyComponent } from './photography.component';

const routes: Routes = [
  { path: '', component: PhotographyComponent }
]

@NgModule({
  declarations: [ PhotographyComponent ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes) ]
})
export class PhotographyModule { }
