import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SculpturesComponent } from './sculptures.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgxMasonryModule } from 'ngx-masonry';

const routes: Routes = [
  { path: '', component: SculpturesComponent }
]

@NgModule({
  declarations: [ SculpturesComponent ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes),
    NgxMasonryModule ]
})
export class SculpturesModule { }
