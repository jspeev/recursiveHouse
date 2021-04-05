import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Card, CardsPayload, CardsView} from './model';
import * as _ from 'underscore';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private api: any = {
    baseURL: 'https://api.elderscrollslegends.io',
    version: 'v1',
    cards: 'cards'
  };

  constructor(private http: HttpClient) { }

  getCards(): Observable<CardsView> {

    const url = `${this.api.baseURL}/${this.api.version}/${this.api.cards}`;

    return this.http.get(url, httpOptions).pipe(
      map((payload: CardsPayload) => {
        return { cards : _.map(payload.cards, (card: Card) => {
          return {
            name: card.name,
            type: card.type,
            text: card.text,
            imageURL: card.imageUrl,
            setName: card.set.name
          };
        })};
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred while resolving server data:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
      }
    ));
  }

}
