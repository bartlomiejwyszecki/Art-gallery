import { OnInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
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
export class SculpturesComponent implements OnInit {
  sculptures: Observable<ArtObject[]>;
  categories: Observable<string[]>;
  artists: Observable<string[]>;

  constructor(private http: SculpturesService, private ref: ChangeDetectorRef) { 
    this.ref.markForCheck();
  }

  ngOnInit() {
    this.sculptures = this.http.getSculptures();
    this.categories = this.http.getCategories();
    this.artists = this.http.getArtists();
  }

  getCategory(cat: string) {
    this.sculptures = this.http.getSculpturesFromCategory(cat);
  }

  getAllSculptures() {
    this.sculptures = this.http.getSculptures();
  }

  getArtist(artist: string) {
    this.sculptures = this.http.getSculpturesFromArtists(artist);
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
    /*const sculpture: Partial<ArtObject> = {
      id: id,
      rating: (Number(rating) + 1).toString()
    }*/
    if (sculpture.addRating === true) {
      sculpture.rating = (Number(sculpture.rating) + 1).toString();
      sculpture.addRating = false;
    } else if(sculpture.addRating === false) {
      alert('You already added one heart!');
    }
    this.http.patchStar(sculpture).subscribe(
      () => {
        console.log(sculpture.addRating);
      }
    );
  }
}
