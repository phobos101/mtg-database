import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Card } from '../models/card';

@Injectable()
export class CardSearchService {
    private API_PATH: string = 'https://api.magicthegathering.io/v1'

    constructor(private http: Http) {}

    search(term: string): Observable<Card[]> {
        return this.http
                   .get(`${this.API_PATH}/cards?name=${term}`)
                   .map((res: Response) => res.json().cards as Card[]);
    }

}
