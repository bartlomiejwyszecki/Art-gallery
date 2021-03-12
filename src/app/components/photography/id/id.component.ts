import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ArtObject } from 'src/app/models/models';
import { PhotographyService } from 'src/app/services/photography/photography.service';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./../../sculptures/id/id.component.scss']
})
export class PhotoIdComponent implements OnInit {
  photo: Observable<ArtObject>;

  constructor(private http: PhotographyService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.photo = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getPhoto(params.get('id')))
    )
  }

  addStar(photo) {
    if (photo.addRating === true) {
      photo.rating = (Number(photo.rating) + 1).toString();
      photo.addRating = false;
    } else if(photo.addRating === false) {
      alert('You already added one heart!');
    }
    this.http.patchStar(photo).subscribe();
  }
}
