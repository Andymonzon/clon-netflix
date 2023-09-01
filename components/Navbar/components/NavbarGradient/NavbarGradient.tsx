'use client'

import { useEffect, useRef, useState } from 'react'

interface Prop {
  children: React.ReactNode
}

function NavbarGradient ({ children }: Prop) {
  const [isVisible, setIsVisible] = useState('bg-gradient-to-b from-[#141414bb] to-transparent')

  const reference = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 10) {
        setIsVisible('bg-gradient-to-b from-[#141414bb] to-transparent')
      } else {
        setIsVisible('bg-gradient-to-t from-[#141414] to-black')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav className={`flex w-full justify-between px-14 py-[20px] items-center fixed z-10 ${isVisible}`} style={{ transition: 'background 0.3s ease-in-out' }} ref={reference}>{children}</nav>)
}

export default NavbarGradient
