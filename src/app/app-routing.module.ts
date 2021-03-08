import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sculptures', 
    loadChildren: () => import('./components/sculptures/sculptures.module').then(m => m.SculpturesModule)
  },
  { path: 'paintings', 
    loadChildren: () => import('./components/paintings/paintings.module').then(m => m.PaintingsModule)
  },
  { path: 'photography', 
    loadChildren: () => import('./components/photography/photography.module').then(m => m.PhotographyModule)
  },
  { path: 'artists', 
    loadChildren: () => import('./components/artists/artists.module').then(m => m.ArtistsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
