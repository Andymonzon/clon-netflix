'use client'

import { NavigationAuth } from './components'

import { type Session } from '@supabase/auth-helpers-nextjs'
import { usePathname, redirect } from 'next/navigation'
import { authSevice } from './services'

interface Prop {
  session: Session | null
}

export default function AuthFormClient ({ session }: Prop) {
  const { email, error, password, getEmail, getPassword, signIn, signUp } = authSevice()
  const pathname = usePathname()

  const title = pathname === '/' ? 'Registrarse' : 'Iniciar Sesión'

  if (session != null) return redirect('/home')

  return (
    <>
      <p className="text-3xl font-bold mb-9">{title}</p>
      <form className="flex flex-col gap-5 w-[20rem]" onSubmit={
        pathname === '/'
          ? (
              signUp
            )
          : (
              signIn
            )
      }>
        <input onChange={(e) => { getEmail(e.target.value) }} value={email} name='email' required autoComplete="off" type="email" placeholder="Email" className="py-3 px-4 rounded-sm bg-[#333] outline-none"/>
        <input onChange={(e) => { getPassword(e.target.value) }} value={password} name='password' required autoComplete="off" type="password" placeholder="Contraseña" className="py-3 px-4 rounded-sm bg-[#333] outline-none"/>
        {
          error !== '' && <p className='p-0 m-0 text-[#e50914]'>{error}</p>
        }
        <button className="mt-4 bg-[#e50914] p-3 rounded-sm">{title}</button>
        <NavigationAuth pathname={pathname}/>
      </form>
    </>
  )
}
