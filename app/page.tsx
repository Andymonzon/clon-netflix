import { AuthForm, AuthLayout } from '@/components'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Register () {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getUser()

  return (
    <AuthLayout>
      <AuthForm title='Registrarse'/>
    </AuthLayout>
  )
}
