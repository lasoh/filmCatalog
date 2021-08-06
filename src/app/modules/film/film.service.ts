import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';
import { Film } from './interfaces/film.interface';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private filmsSource = new BehaviorSubject<Film[]>(null);
  films$ = this.filmsSource.asObservable();
  private date = new Date().toISOString().slice(0, 10);

  constructor(private httpClient: HttpClient) {}

  public getAll(params?: Params): Observable<boolean> {
    const paramsReq: Params = {
      date: this.date,
      ...params,
    };
    return this.httpClient
      .get<Film[]>(`https://api.tvmaze.com/schedule/web`, {
        params: paramsReq,
      })
      .pipe(
        tap((films) => {
          this.filmsSource.next(films);
        }),
        mapTo(true)
      );
  }
  public getFilm(id: number): Observable<Film> {
    return this.httpClient.get<Film>(`https://api.tvmaze.com/shows/${id}`);
  }
}
