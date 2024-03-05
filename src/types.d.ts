export interface Entries {
  data: {
  total:   number;
  entries: Entry[];
  }
}

export interface Entry {
  title:       string;
  description: string;
  programType?: ProgramType;
  images:      Images;
  releaseYear: number;
}

export interface Images {
  "Poster Art": PosterArt;
}

export interface PosterArt {
  url:    string;
  width:  number;
  height: number;
}

export enum ProgramType {
  Movie = "movie",
  Series = "series",
}

export interface IConfig {
  title: string
  error: string
}

export interface IMenu  {
  id?:number;
  name?: string;
  label?: string;
  link?: string;
  image?: string;
}