import Image from 'next/image'
import defaultImg from '@/public/default-img-user.png'
import { IconCaretDownFilled } from '@tabler/icons-react'
import './Navbar.css'
import Logout from './components/Logout/Logout'

function Navbar () {
  return (
    <nav>
      <div>
        <div className='flex items-center gap-2 cursor-pointer max-w-max vuelta'>
          <Image src={defaultImg} alt="User image" width={40} height={40} className='rounded-lg' />
          <IconCaretDownFilled className='w-[15px] ivuelta' />
        </div>
        <div>
          <Logout />
        </div>
      </div>
    </nav >
  )
}

export default Navbar
