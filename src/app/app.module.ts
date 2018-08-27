import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainModule } from './domain';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { MatCardModule } from '@angular/material';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectSearchComponent } from './project-search/project-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    ProjectCardComponent,
    ProjectSearchComponent
  ],
  imports: [
    BrowserModule,
    DomainModule,
    AppRoutingModule,
    MatCardModule
  ],
  exports: [
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
