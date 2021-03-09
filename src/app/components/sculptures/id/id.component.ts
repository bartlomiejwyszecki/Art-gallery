import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ArtObject } from 'src/app/models/models';
import { SculpturesService } from 'src/app/services/sculptures/sculptures.service';

@Component({
  selector: 'app-sculpture-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class SculptureIdComponent implements OnInit {
  sculpture: Observable<ArtObject>;

  constructor(private http: SculpturesService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.sculpture = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getSculpture(params.get('id')))
    )
  }

}
