import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FilmEmbeded } from '../interfaces/film.interface';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
})
export class FilmDetailComponent implements OnInit {
  public film: FilmEmbeded;
  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.film = this.activatedRoute.snapshot.data.film;
    console.log(this.film);
    this.titleService.setTitle(this.film.name);
  }
}
