'use client'

import { useEffect, useState } from 'react'
import { NavigationAuth } from './components'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter, usePathname } from 'next/navigation'

interface Prop {
  title: string
}

export default function AuthForm ({ title }: Prop) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const supabase = createClientComponentClient()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const timer = setTimeout(() => {
      setError('')
    }, 6000)

    return () => { clearTimeout(timer) }
  }, [error])

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email,
          password,
          options: {
            emailRedirectTo: 'http://localhost:3000/auth/callback'
          }
        }
      )
      if (error != null) throw new Error(error.message)

      setError('')
      console.log(data)
    } catch (error) {
      if (error instanceof Error) setError(error.message)
    }
  }

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error != null) throw new Error(error.message)

      setError('')
      console.log(data)
      router.refresh()
    } catch (error) {
      if (error instanceof Error) setError(error.message)
    }
  }

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
        <input onChange={(e) => { setEmail(e.target.value) }} value={email} name='email' required autoComplete="off" type="email" placeholder="Email" className="py-3 px-4 rounded-sm bg-[#333] outline-none"/>
        <input onChange={(e) => { setPassword(e.target.value) }} value={password} name='password' required autoComplete="off" type="password" placeholder="Contraseña" className="py-3 px-4 rounded-sm bg-[#333] outline-none"/>
        {
          error !== '' && <p className='p-0 m-0 text-[#e50914]'>{error}</p>
        }
        <button className="mt-4 bg-[#e50914] p-3 rounded-sm">{title}</button>
        <NavigationAuth pathname={pathname}/>
      </form>
    </>
  )
}
