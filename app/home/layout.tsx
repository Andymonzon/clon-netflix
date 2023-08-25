import { Navbar } from '@/components'

function layout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default layout
