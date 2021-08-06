import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmService } from './film.service';

@Injectable()
export class FilmListResolver implements Resolve<any> {
  constructor(private filmSerivce: FilmService) {}

  resolve(): Observable<boolean> {
    return this.filmSerivce.getAll();
  }
}
