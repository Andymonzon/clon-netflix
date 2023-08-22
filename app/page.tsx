import { AuthFormServer, AuthLayout } from '@/components'

export default async function Register () {
  return (
    <AuthLayout>
      <AuthFormServer />
    </AuthLayout>
  )
}
