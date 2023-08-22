import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const authSevice = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [error, setError] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setError('')
    }, 6000)

    return () => { clearTimeout(timer) }
  }, [error])

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { error } = await supabase.auth.signUp(
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
    } catch (error) {
      if (error instanceof Error) setError(error.message)
    }
  }

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error != null) throw new Error(error.message)

      setError('')
      router.refresh()
    } catch (error) {
      if (error instanceof Error) setError(error.message)
    }
  }

  const getEmail = (email: string) => {
    setEmail(email)
  }

  const getPassword = (password: string) => {
    setPassword(password)
  }

  return {
    email,
    password,
    getEmail,
    getPassword,
    signIn,
    signUp,
    error
  }
}
