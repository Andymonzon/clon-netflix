export interface MovieList {
  page: number
  results: Movie[]
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  original_language: OriginalLanguage
  original_title: string
  overview: string
  poster_path: string
  media_type: MediaType
  genre_ids: number[]
  popularity: number
  release_date: Date
  video: boolean
  vote_average: number
  vote_count: number
}

export enum MediaType {
  Movie = 'movie',
}

export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Zh = 'zh',
}

export interface VideoList {
  id: number
  results: Video[]
}

export interface Video {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: Date
  id: string
}
