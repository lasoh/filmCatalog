import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '@core/shared';
import { PipesModule } from '@core/shared';

import { FilmListResolver } from './film-list.resolver';
import { FilmRoutingModule } from './film-routing.module';
import { FilmResolver } from './film.resolver';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmCardComponent } from './film-list/film-card/film-card.component';

@NgModule({
  declarations: [FilmListComponent, FilmDetailComponent, FilmCardComponent],
  imports: [
    CommonModule,
    FilmRoutingModule,
    NgbModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    PipesModule,
  ],
  providers: [FilmListResolver, FilmResolver],
})
export class FilmModule {}
