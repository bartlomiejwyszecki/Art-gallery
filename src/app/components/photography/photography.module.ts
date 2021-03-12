import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';
import { PhotographyComponent } from './photography.component';
import { PhotoIdComponent } from './id/id.component';

const routes: Routes = [
  { path: '', component: PhotographyComponent },
  { path: 'photo/:id', component: PhotoIdComponent }
]

@NgModule({
  declarations: [ PhotographyComponent, PhotoIdComponent ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes) ]
})
export class PhotographyModule { }
