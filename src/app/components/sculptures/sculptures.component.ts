import { OnInit, Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtObject } from 'src/app/models/models';
import { SculpturesService } from 'src/app/services/sculptures/sculptures.service';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl, 'PLN ');

@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.component.html',
  styleUrls: ['./sculptures.component.scss']
})
export class SculpturesComponent implements OnInit, OnDestroy {
  sculptures: Observable<ArtObject[]>;
  categories: Observable<string[]>;
  artists: Observable<string[]>;
  loaded: boolean;
  currentCategory: string = 'All';
  currentArtist: string;

  constructor(private http: SculpturesService) { }

  ngOnInit() {
    this.sculptures = this.http.getSculptures();
    this.categories = this.http.getCategories();
    this.artists = this.http.getArtists();
  }

  ngOnDestroy() {
    setTimeout(() => { 
      for (let i = 1; i < 36; i++) {
      this.changeAddRating(i);
      }
      console.log('You can add heart again.')
    }, 60000);
  }

  ngAfterViewInit() {
    setTimeout(()=> {
      this.loaded = true;
    }, 3000);
  }

  getCategory(cat: string) {
    this.sculptures = this.http.getSculpturesFromCategory(cat);
    this.currentCategory = cat;
    this.currentArtist = '';
  }

  getAllSculptures() {
    this.sculptures = this.http.getSculptures();
    this.currentCategory = 'All';
    this.currentArtist = '';
  }

  getAllArtists() {
    this.sculptures = this.http.getSculptures();
    this.currentArtist = 'All';
    this.currentCategory = '';
  }

  getArtist(artist: string) {
    this.sculptures = this.http.getSculpturesFromArtists(artist);
    this.currentArtist = artist;
    this.currentCategory = '';
  }

  getPriceHighest() {
    this.sculptures = this.http.getSculpturesByHighestPrice(this.sculptures);
  }

  getPriceLowest() {
    this.sculptures = this.http.getSculpturesByLowestPrice(this.sculptures);
  }

  getHeartRate() {
    this.sculptures = this.http.getSculpturesByRate(this.sculptures);
  }

  addStar(sculpture) {
    if (sculpture.addRating === true) {
      sculpture.rating = (Number(sculpture.rating) + 1).toString();
      sculpture.addRating = false;
    } else if(sculpture.addRating === false) {
      alert('You already added one heart!');
    }
    this.http.patchStar(sculpture).subscribe();
  }

  changeAddRating(id) {
    const sculpture: Partial<ArtObject> = {
      id: id,
      addRating: true
    }
    this.http.patchStar(sculpture).subscribe();
  }
}
