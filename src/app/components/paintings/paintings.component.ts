import { OnInit, Component, OnDestroy } from '@angular/core';
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
export class PaintingsComponent implements OnInit {
  paintings: Observable<ArtObject[]>;
  categories: Observable<string[]>;
  artists: Observable<string[]>;

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
    }, 300000);
  }

  getCategory(cat: string) {
    this.paintings = this.http.getPaintingsFromCategory(cat);
  }

  getAllPaintings() {
    this.paintings = this.http.getPaintings();
  }

  getArtist(artist: string) {
    this.paintings = this.http.getPaintingsFromArtists(artist);
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
