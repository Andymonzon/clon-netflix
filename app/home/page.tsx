import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { getMovies } from '@/services'
import { type Movie } from '@/models/movies.model'
import Image from 'next/image'

async function home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session == null) return redirect('/login')

  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=es-ES'
  const trendingMovies = await getMovies(url) as Movie[]

  return (
    <div>
      <Image priority className='absolute top-0 left-0 z-[-1] w-full h-screen' src={`https://image.tmdb.org/t/p/original${trendingMovies[0].backdrop_path}`} width={1366} height={667} alt='movie poster' />
      <h1>Home</h1>
    </div>
  )
}

export default home
