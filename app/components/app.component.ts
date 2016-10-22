import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <mtg-top-nav></mtg-top-nav>
        </header>
        
        <main>
            <router-outlet></router-outlet>
        </main>
    `
})

export class AppComponent {}