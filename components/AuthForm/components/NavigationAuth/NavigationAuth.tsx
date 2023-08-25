import Link from 'next/link'

interface Prop {
  pathname: string
}

function NavigationAuth ({ pathname }: Prop) {
  return (
    <div>{
        pathname === '/login'
          ? (
          <p className='flex justify-between text-sm items-center'>¿Primera vez en Netflix? <Link href='/' className='hover:underline text-base' >Suscríbete ahora.</Link></p>
            )
          : (
          <p className='flex justify-between text-sm items-center'>¿Ya tienes una cuenta? <Link href='/login' className='hover:underline text-base' >Inicia sesión.</Link></p>
            )
      }</div>
  )
}
export default NavigationAuth
