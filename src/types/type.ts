// for API
export type api_genreType = {id: number, name: string}
export type api_genresType = {
  genres: api_genreType[]
}
export type api_configType = {
  images: {
    base_url: string,
    secure_base_url: string,
    backdrop_sizes: string[],
    logo_sizes: string[],
    poster_sizes: string[],
    profile_sizes: string[],
    still_sizes: string[]
  },
  change_keys: string[]
}
export type api_movieType = {
  adult?: boolean,
  backdrop_path: string,
  genre_ids?: number[],
  id: number,
  original_language?: string,
  original_title?: string,
  overview: string,
  popularity?: number,
  poster_path?: string,
  release_date: string,
  title: string,
  video?: boolean,
  vote_average: number,
  vote_count?: number,
  youtube_key?: string
}
export type api_movie_responseType = {
  page: number,
  results: api_movieType[],
  total_pages: number,
  total_results: number
}
export type api_videoType = {
  id: string,
  iso_639_1: string,
  iso_3166_1: string,
  key: string,
  name: string,
  official: boolean,
  published_at: string,
  site: string,
  size: number,
  type: string
}
export type api_video_responseType = {
  id: number,
  results: api_videoType[]
}
