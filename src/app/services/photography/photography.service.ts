import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArtObject } from './../../models/models';

@Injectable({
  providedIn: 'root'
})
export class PhotographyService {

  //private url = 'http://localhost:4600/photography';
  private url = '/api/photography';

  constructor(private httpClient: HttpClient) { }

  getPhotos(): Observable<ArtObject[]> {
    return this.httpClient.get<ArtObject[]>(this.url);
  }

  getPhotosFromCategory(cat: string): Observable<ArtObject[]> {
    return this.getPhotos().pipe(
      map(objects => objects.filter(o => o.category.toLowerCase() === cat.toLowerCase()))
    );
  }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.url + 'Categories');
  }

  getArtists(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.url + 'Artists');
  }

  getPhotosFromArtists(artist: string): Observable<ArtObject[]> {
    return this.getPhotos().pipe(
      map(objects => objects.filter(o => o.author === artist))
    )
  }

  getPhoto(id: string): Observable<ArtObject> {
    return this.httpClient.get<ArtObject>(this.url + '/' + id);
  }

  getPhotosByHighestPrice(ar: Observable<ArtObject[]>): Observable<ArtObject[]> {
    return ar.pipe(
      map(objects => objects.sort((a, b) => {
        return parseFloat(b.price) - parseFloat(a.price);
      }))
    )
  }

  getPhotosByLowestPrice(ar: Observable<ArtObject[]>): Observable<ArtObject[]> {
    return ar.pipe(
      map(objects => objects.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price);
      }))
    )
  }

  getPhotosByRate(ar: Observable<ArtObject[]>): Observable<ArtObject[]> {
    return ar.pipe(
      map(objects => objects.sort((a, b) => {
        return parseFloat(b.rating) - parseFloat(a.rating);
      }))
    )
  }

  patchStar(object: Partial<ArtObject>): Observable<ArtObject> {
    return this.httpClient.patch<ArtObject>(this.url + '/' + object.id, object);
  }
}
