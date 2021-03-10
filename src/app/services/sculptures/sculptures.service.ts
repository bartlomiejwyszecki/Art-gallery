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

  constructor(private httpClient: HttpClient) { }

  getSculptures(): Observable<ArtObject[]> {
    return this.httpClient.get<ArtObject[]>(this.url);
  }

  getSculpturesFromCategory(cat: string): Observable<ArtObject[]> {
    return this.getSculptures().pipe(
      map(sculptures => sculptures.filter(s => s.category === cat.toLowerCase()))
    );
  }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/sculpturesCategories');
  }

  getArtists(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.url + 'Artists');
  }

  getSculpturesFromArtists(artist: string): Observable<ArtObject[]> {
    return this.getSculptures().pipe(
      map(sculptures => sculptures.filter(s => s.author === artist))
    )
  }

  getSculpture(id: string): Observable<ArtObject> {
    return this.httpClient.get<ArtObject>(this.url + '/' + id);
  }

  getSculpturesByHighestPrice(ar: Observable<ArtObject[]>): Observable<ArtObject[]> {
    return ar.pipe(
      map(sculptures => sculptures.sort((a, b) => {
        return parseFloat(b.price) - parseFloat(a.price);
      }))
    )
  }

  getSculpturesByLowestPrice(ar: Observable<ArtObject[]>): Observable<ArtObject[]> {
    return ar.pipe(
      map(sculptures => sculptures.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price);
      }))
    )
  }

  getSculpturesByRate(ar: Observable<ArtObject[]>): Observable<ArtObject[]> {
    return ar.pipe(
      map(sculptures => sculptures.sort((a, b) => {
        return parseFloat(b.rating) - parseFloat(a.rating);
      }))
    )
  }
}
