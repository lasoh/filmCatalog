import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../interfaces/film.interface';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
})
export class FilmCardComponent {
  @Input() film: Film;

  constructor() {}
}
