import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmService } from './film.service';
import { Film } from './interfaces/film.interface';

@Injectable()
export class FilmResolver implements Resolve<any> {
  constructor(private filmSerivce: FilmService) {}

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Film> {
    return this.filmSerivce.getFilm(activatedRouteSnapshot.params.id);
  }
}
