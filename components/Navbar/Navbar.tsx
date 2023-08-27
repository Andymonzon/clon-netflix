import Image from 'next/image'
import defaultImg from '@/public/default-img-user.png'
import { IconCaretDownFilled, IconCaretUpFilled } from '@tabler/icons-react'
import './Navbar.css'
import Logout from './components/Logout/Logout'
import { SvgNetflix } from '..'

function Navbar () {
  return (
    <nav className='flex justify-between px-14 py-[20px] items-center bg-gradient-to-b from-[#141414cc] to-transparent'>
      <span className='text-[#e50914]'>
        <SvgNetflix width={93} />
      </span>
      <div>
        <div className='flex items-center gap-2 cursor-pointer max-w-max vuelta relative'>
          <Image src={defaultImg} alt="User image" width={30} height={30} className='rounded-lg' />
          <IconCaretDownFilled className='w-[15px] ivuelta' />
          <div className='mostrar bg-[#000] min-w-[200px] invisible absolute right-3 top-[170%] opacity-0' >
            <IconCaretUpFilled className='absolute right-[15px] -top-[18px] w-[22px]' />
            <Logout />
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar
