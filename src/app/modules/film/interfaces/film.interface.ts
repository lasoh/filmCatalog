export type WeekDays =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export interface Film {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: FilmImage;
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
  _embedded: {show: FilmEmbeded};
  _links: FilmLinks;
}

export interface FilmLinks {
  self: {
    href: string;
  };
  previousepisode?: {
    href: string;
  };
  nextepisode?: {
    href: string;
  };
}
export interface FilmEmbeded {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    officialSite: string;
    schedule: FilmSchedule;
    rating: FilmRating;
    weight: number;
    network: FilmNetwork;
    webChannel: FilmWebChannel;
    dvdCountry: unknown;
    externals: FilmExternals;
    image: FilmImage;
    summary: string;
    updated: number;
    _links: FilmLinks;
}

export interface FilmNetwork {
  id: number;
  name: string;
  country: FilmCountry;
}

export interface FilmRating {
  average: number;
}

export interface FilmWebChannel {
  id: number;
  name: string;
  country: FilmCountry;
}

export interface FilmSchedule {
  time: string;
  days: WeekDays[];
}

export interface FilmExternals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface FilmImage {
  medium: string;
  original: string;
}

export interface FilmCountry {
  name: string;
  code: string;
  timezone: string;
}
