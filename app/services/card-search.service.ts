import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Card } from '../models/card';

@Injectable()
export class CardSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<Card[]> {
        const url: string = 'https://api.magicthegathering.io/v1'
        return this.http
                   .get(`${url}/cards?name=${term}`)
                   .map((res: Response) => res.json().data as Card[]);
    }

}
