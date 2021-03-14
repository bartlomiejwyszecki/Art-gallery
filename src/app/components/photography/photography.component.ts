import { OnInit, Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtObject } from 'src/app/models/models';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { PhotographyService } from 'src/app/services/photography/photography.service';
registerLocaleData(localePl, 'PLN ');

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./../sculptures/sculptures.component.scss']
})
export class PhotographyComponent implements OnInit, OnDestroy, AfterViewInit {
  photos: Observable<ArtObject[]>;
  categories: Observable<string[]>;
  artists: Observable<string[]>;
  loaded: boolean;
  currentCategory: string = 'All';
  currentArtist: string;

  constructor(private http: PhotographyService) { }

  ngOnInit() {
    this.photos = this.http.getPhotos();
    this.categories = this.http.getCategories();
    this.artists = this.http.getArtists();
  }

  ngOnDestroy() {
    setTimeout(() => { 
      for (let i = 1; i < 36; i++) {
      this.changeAddRating(i);
      }
      console.log('You can add heart again.')
    }, 90000);
  }

  ngAfterViewInit() {
    setTimeout(()=> {
      this.loaded = true;
    }, 2500);
  }

  getCategory(cat: string) {
    this.photos = this.http.getPhotosFromCategory(cat);
    this.currentCategory = cat;
    this.currentArtist = '';
  }

  getAllPhotos() {
    this.photos = this.http.getPhotos();
    this.currentCategory = 'All';
    this.currentArtist = '';
  }

  getAllArtists() {
    this.photos = this.http.getPhotos();
    this.currentArtist = 'All';
    this.currentCategory = '';
  }

  getArtist(artist: string) {
    this.photos = this.http.getPhotosFromArtists(artist);
    this.currentArtist = artist;
    this.currentCategory = '';
  }

  getPriceHighest() {
    this.photos = this.http.getPhotosByHighestPrice(this.photos);
  }

  getPriceLowest() {
    this.photos = this.http.getPhotosByLowestPrice(this.photos);
  }

  getHeartRate() {
    this.photos = this.http.getPhotosByRate(this.photos);
  }

  addStar(object: ArtObject) {
    if (object.addRating === true) {
      object.rating = (Number(object.rating) + 1).toString();
      object.addRating = false;
    } else if(object.addRating === false) {
      alert('You already added one heart!');
    }
    this.http.patchStar(object).subscribe();
  }

  changeAddRating(id) {
    const object: Partial<ArtObject> = {
      id: id,
      addRating: true
    }
    this.http.patchStar(object).subscribe();
  }
}
