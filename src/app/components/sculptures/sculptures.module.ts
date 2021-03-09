import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SculpturesComponent } from './sculptures.component';
import { CommonModule } from '@angular/common';
import { SculptureIdComponent } from './id/id.component';

const routes: Routes = [
  { path: '', component: SculpturesComponent },
  { path: 'sculpture/:id', component: SculptureIdComponent }
]

@NgModule({
  declarations: [ SculpturesComponent, SculptureIdComponent ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes) ]
})
export class SculpturesModule { }
