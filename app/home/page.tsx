import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { getMovies } from '@/services'
import { type Movie } from '@/models/movies.model'
import Image from 'next/image'
import { CardSlider } from '@/components'

async function home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session == null) return redirect('/login')

  const urlTrending = 'https://api.themoviedb.org/3/trending/all/day?language=es-ES'
  const urlPopularSeries = 'https://api.themoviedb.org/3/tv/popular?language=es-ES'
  const urlPopularMovies = 'https://api.themoviedb.org/3/movie/popular?language=es-ES'
  const urlUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?language=es-ES'
  const urlOnTheAir = 'https://api.themoviedb.org/3/tv/on_the_air?language=es-ES'

  const trendingMovies = await getMovies(urlTrending) as Movie[]
  const popularSeries = await getMovies(urlPopularSeries) as Movie[]
  const popularMovies = await getMovies(urlPopularMovies) as Movie[]
  const upcomingMovies = await getMovies(urlUpcoming) as Movie[]
  const onTheAirSeries = await getMovies(urlOnTheAir) as Movie[]

  return (
    <div className='bg-[#141414] h-full'>
      <div className='md:h-[calc(100vh-270px)] lg:h-[calc(100vh-240px)] xl:h-[calc(100vh-120px)]'>
        <Image priority className='absolute top-0 left-0 w-full h-auto object-cover' width={1366} height={650} src={`https://image.tmdb.org/t/p/original${trendingMovies[0].backdrop_path}`} alt='movie poster' />
      </div>
      <div className='pb-2 bg-gradient-to-t from-[#141414] from-80% to-transparent relative z-20'>
        <CardSlider data={trendingMovies} title='Tendencias' />
        <CardSlider data={popularSeries} title='Series Populares' />
        <CardSlider data={popularMovies} title='Peliculas Populares' />
        <CardSlider data={upcomingMovies} title='Próximos Estrenos' />
        <CardSlider data={onTheAirSeries} title='Series al aire' />
      </div>
    </div>
  )
}

export default home
