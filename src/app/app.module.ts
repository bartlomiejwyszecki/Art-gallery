import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { SculpturesComponent } from './components/sculptures/sculptures.component';
import { PaintingsComponent } from './components/paintings/paintings.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { ArtistsComponent } from './components/artists/artists.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    SculpturesComponent,
    PaintingsComponent,
    PhotographyComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
