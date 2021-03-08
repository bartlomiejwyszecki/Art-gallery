import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArtObject } from './../../models/models';
import { SculpturesModule } from 'src/app/components/sculptures/sculptures.module';

@Injectable({
  providedIn: 'root'
})
export class SculpturesService {

  private url = 'http://localhost:3000/sculptures';

  constructor(private HttpClient: HttpClient) { }

  getSculptures(): Observable<ArtObject[]> {
    return this.HttpClient.get<ArtObject[]>(this.url);
  }
}
