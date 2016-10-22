import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


import { Card } from '../../models/card';
import { CardSearchService } from '../../services/card-search.service';

@Component({
    moduleId: module.id,
    selector: 'mtg-dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [CardSearchService]
})

export class DashboardComponent implements OnInit {
    cards: Observable<Card[]>;
    private searchTerms = new Subject<string>();

    constructor(private cardSearchService: CardSearchService) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.cards = this.searchTerms
            .filter(value => value.length >= 3)
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.cardSearchService.search(term)
                : Observable.of<Card[]>([])
            )
            .catch(error => {
                console.error(error);
                return Observable.of<Card[]>([]);
            });
    }

}