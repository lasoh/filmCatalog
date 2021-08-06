import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmResolver } from './film.resolver';
import { FilmListResolver } from './film-list.resolver';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListComponent } from './film-list/film-list.component';

const routes: Routes = [
  {
    path: 'details/:id',
    component: FilmDetailComponent,
    resolve: { film: FilmResolver },
  },
  {
    path: '',
    component: FilmListComponent,
    resolve: { films: FilmListResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmRoutingModule {}
