import { type VideoList, type MovieList } from '@/models/movies.model'

const apiKey = process.env.MOVIE_API_KEY

type DataType = MovieList | VideoList

export const getMovies = async (url: string) => {
  try {
    if (apiKey === undefined) throw new Error('Error: No se encontró la apiKey')
    const res = await fetch(url + `&api_key=${apiKey}`)
    const data: DataType = await res.json()
    return data.results
  } catch (e) {
    console.log(e)
  }
}
