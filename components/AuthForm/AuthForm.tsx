'use client'

import { useState } from 'react'
import { NavigationAuth } from './components'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

interface Prop {
  title: string
}

export default function AuthForm ({ title }: Prop) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          emailRedirectTo: 'http://localhost:3000/auth/callback'
        }
      }
    )
    router.refresh()
  }

  return (
    <>
      <p className="text-3xl font-bold mb-9">{title}</p>
      <form className="flex flex-col gap-5 w-[20rem]" onSubmit={handleSubmit}>
        <input onChange={(e) => { setEmail(e.target.value) }} value={email} name='email' required autoComplete="off" type="email" placeholder="Email" className="py-3 px-4 rounded-sm bg-[#333] outline-none"/>
        <input onChange={(e) => { setPassword(e.target.value) }} value={password} name='password' required autoComplete="off" type="password" placeholder="Contraseña" className="py-3 px-4 rounded-sm bg-[#333] outline-none"/>
        <button className="mt-4 bg-[#e50914] p-3 rounded-sm">{title}</button>
        <NavigationAuth />
      </form>
    </>
  )
}
