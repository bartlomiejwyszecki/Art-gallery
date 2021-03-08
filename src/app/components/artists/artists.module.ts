import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsComponent } from './artists.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ArtistsComponent }
]

@NgModule({
  declarations: [ ArtistsComponent ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes) ]
})
export class ArtistsModule { }