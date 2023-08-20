import { SvgNetflix } from '..'
import style from './register.module.css'

function AuthLayout ({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div
        className={`bg-cover scale-125 translate-y-[-10%] w-full h-full opacity-50 ${style.bgNetflix}`}
      />
      <div className="absolute top-0 left-0 z-10">
        <header className="w-screen px-8 py-6">
          <span className="text-[#e50914]">
            <SvgNetflix />
          </span>
        </header>

        <div className='w-max mx-auto px-[67px] pt-16  bg-[#000000bf] h-[calc(100vh-94px)] rounded-sm'>
            {children}
        </div>
      </div>
    </div>
  )
}
export default AuthLayout
