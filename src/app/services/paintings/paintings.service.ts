import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArtObject } from './../../models/models';

@Injectable({
  providedIn: 'root'
})
export class PaintingsService {

  private url = 'http://localhost:3001/paintings';

  constructor(private httpClient: HttpClient) { }

  getPaintings(): Observable<ArtObject[]> {
    return this.httpClient.get<ArtObject[]>(this.url);
  }

  getPaintingsFromCategory(cat: string): Observable<ArtObject[]> {
    return this.getPaintings().pipe(
      map(sculptures => sculptures.filter(s => s.category === cat))
    );
  }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3001/paintingsCategories');
  }

  getArtists(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.url + 'Artists');
  }

  getPaintingsFromArtists(artist: string): Observable<ArtObject[]> {
    return this.getPaintings().pipe(
      map(paintings => paintings.filter(p => p.author === artist))
    )
  }

  getPainting(id: string): Observable<ArtObject> {
    return this.httpClient.get<ArtObject>(this.url + '/' + id);
  }

  getPaintingsByHighestPrice(ar: Observable<ArtObject[]>): Observable<ArtObject[]> {
    return ar.pipe(
      map(paintings => paintings.sort((a, b) => {
        return parseFloat(b.price) - parseFloat(a.price);
      }))
    )
  }

  getPaintingsByLowestPrice(ar: Observable<ArtObject[]>): Observable<ArtObject[]> {
    return ar.pipe(
      map(paintings => paintings.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price);
      }))
    )
  }

  getPaintingsByRate(ar: Observable<ArtObject[]>): Observable<ArtObject[]> {
    return ar.pipe(
      map(paintings => paintings.sort((a, b) => {
        return parseFloat(b.rating) - parseFloat(a.rating);
      }))
    )
  }

  patchStar(painting: Partial<ArtObject>): Observable<ArtObject> {
    return this.httpClient.patch<ArtObject>(this.url + '/' + painting.id, painting);
  }
}
