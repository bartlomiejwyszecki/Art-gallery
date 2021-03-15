import { OnInit, Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtObject } from 'src/app/models/models';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { PaintingsService } from 'src/app/services/paintings/paintings.service';
registerLocaleData(localePl, 'PLN ');

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./../sculptures/sculptures.component.scss']
})
export class PaintingsComponent implements OnInit, OnDestroy, AfterViewInit {
  paintings: Observable<ArtObject[]>;
  categories: Observable<string[]>;
  artists: Observable<string[]>;
  loaded: boolean;
  currentCategory: string = 'All';
  currentArtist: string;

  constructor(private http: PaintingsService) { }

  ngOnInit() {
    this.paintings = this.http.getPaintings();
    this.categories = this.http.getCategories();
    this.artists = this.http.getArtists();
  }

  ngOnDestroy() {
    setTimeout(() => { 
      for (let i = 1; i < 36; i++) {
      this.changeAddRating(i);
      }
      console.log('You can add heart again.')
    }, 45000);
  }

  ngAfterViewInit() {
    setTimeout(()=> {
      this.loaded = true;
    }, 2500);
  }

  getCategory(cat: string) {
    this.paintings = this.http.getPaintingsFromCategory(cat);
    this.currentCategory = cat;
    this.currentArtist = '';
  }

  getAllPaintings() {
    this.paintings = this.http.getPaintings();
    this.currentCategory = 'All';
    this.currentArtist = '';
  }

  getAllArtists() {
    this.paintings = this.http.getPaintings();
    this.currentArtist = 'All';
    this.currentCategory = '';
  }

  getArtist(artist: string) {
    this.paintings = this.http.getPaintingsFromArtists(artist);
    this.currentArtist = artist;
    this.currentCategory = '';
  }

  getPriceHighest() {
    this.paintings = this.http.getPaintingsByHighestPrice(this.paintings);
  }

  getPriceLowest() {
    this.paintings = this.http.getPaintingsByLowestPrice(this.paintings);
  }

  getHeartRate() {
    this.paintings = this.http.getPaintingsByRate(this.paintings);
  }

  addStar(painting) {
    if (painting.addRating === true) {
      painting.rating = (Number(painting.rating) + 1).toString();
      painting.addRating = false;
    } else if(painting.addRating === false) {
      alert('You already added one heart!');
    }
    this.http.patchStar(painting).subscribe();
  }

  changeAddRating(id) {
    const painting: Partial<ArtObject> = {
      id: id,
      addRating: true
    }
    this.http.patchStar(painting).subscribe();
  }
}
