import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArtObject } from './../../models/models';

@Injectable({
  providedIn: 'root'
})
export class SculpturesService {

  private url = 'http://localhost:3000/sculptures';

  constructor(private HttpClient: HttpClient) { }

  getSculptures(): Observable<ArtObject[]> {
    return this.HttpClient.get<ArtObject[]>(this.url);
  }

  getSculpturesFromCategory(cat: string): Observable<ArtObject[]> {
    return this.getSculptures().pipe(
      map(sculptures => sculptures.filter(s => s.category === cat.toLowerCase()))
    );
  }

  getCategories(): Observable<string[]> {
    return this.HttpClient.get<string[]>('http://localhost:3000/sculpturesCategories');
  }

  getArtists(): Observable<string[]> {
    return this.HttpClient.get<string[]>(this.url + 'Artists');
  }

  getSculpturesFromArtists(artist: string): Observable<ArtObject[]> {
    return this.getSculptures().pipe(
      map(sculptures => sculptures.filter(s => s.author === artist))
    )
  }
}
