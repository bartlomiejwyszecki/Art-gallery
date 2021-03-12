import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ArtObject } from 'src/app/models/models';
import { PaintingsService } from 'src/app/services/paintings/paintings.service';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./../../sculptures/id/id.component.scss']
})
export class PaintingsIdComponent implements OnInit {
  painting: Observable<ArtObject>;

  constructor(private http: PaintingsService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.painting = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getPainting(params.get('id')))
    )
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
}
