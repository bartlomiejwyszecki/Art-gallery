import { OnInit, Component, ViewChild } from '@angular/core';
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

  constructor(private http: SculpturesService) { }

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

  priceHighest() {
    this.sculptures = this.http.getSculpturesByHighestPrice(this.sculptures);
  }

  priceLowest() {
    this.sculptures = this.http.getSculpturesByLowestPrice(this.sculptures);
  }
}
