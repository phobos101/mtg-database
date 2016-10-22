import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// RouterModule
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
