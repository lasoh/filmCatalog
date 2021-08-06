import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { FilmService } from '../film.service';
import { Film } from '../interfaces/film.interface';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
})
export class FilmListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  private title = 'Films list';
  public films: Film[];
  public filmFilterForm: FormGroup = new FormGroup({});
  public genres: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private filmService: FilmService
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.filmService.films$
      .pipe(takeUntil(this.destroy$))
      .subscribe((films) => (this.films = films));
    this.initFilters();
    this.initGenres();

    this.filmFilterForm.get('calendar').valueChanges.subscribe((value) => {
      const dateParam = new Date(value.year, value.month - 1, value.day + 1)
        .toISOString()
        .slice(0, 10);
      this.filmService.getAll({ date: dateParam }).subscribe();
    });
    this.filmFilterForm
      .get('genres')
      .valueChanges.pipe(
        switchMap((value) =>
          this.filmService.films$.pipe(
            takeUntil(this.destroy$),
            map((films) => {
              return films.filter((film) => {
                return value.some(
                  (r) => film._embedded.show.genres.indexOf(r) > -1
                );
              });
            })
          )
        )
      )
      .subscribe((value) => {
        this.films = value;
      });
  }

  private initFilters(): void {
    this.filmFilterForm = new FormGroup({
      calendar: new FormControl(null),
      genres: new FormControl(this.genres),
    });
  }

  private initGenres(): void {
    this.filmService.films$
      .pipe(takeUntil(this.destroy$))
      .subscribe((films) => {
        let gen = [];
        films.forEach((film) => {
          gen = [...gen, ...film._embedded.show.genres];
        });
        this.genres = [...new Set(gen)];
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
