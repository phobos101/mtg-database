// Angular2
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

// RXJS
import './rxjs-extensions';

// Components
import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services
import { CardSearchService } from './services/card-search.service';

// RouterModule
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    providers: [CardSearchService],
    bootstrap: [AppComponent]
})

export class AppModule { }
