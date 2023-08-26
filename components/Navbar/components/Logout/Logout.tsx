'use client'
import { authSevice } from '@/components/AuthForm/services'

function Logout () {
  const { logOut } = authSevice()
  return (
    <button onClick={logOut}>Cerrar sesión en Netflix</button>
  )
}

export default Logout
