import { type Movie } from '@/models/movies.model'
import { Slider } from '..'

interface Props {
  title: string
  data: Movie[]
}

function CardSlider ({ title, data }: Props) {
  return (
    <div className='my-10'>
      <h2 className='text-xl font-bold mx-[60px] my-2' >{title}</h2>
      <Slider data={data} gap={5} />
    </div>
  )
}

export default CardSlider
