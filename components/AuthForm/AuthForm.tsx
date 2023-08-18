interface Prop {
  title: string
}

export default function AuthForm ({ title }: Prop) {
  return (
    <>
      <p className="text-3xl font-bold mb-9">{title}</p>
      <form className="flex flex-col gap-5 w-[20rem]">
        <input required autoComplete="off" type="email" placeholder="Email" className="py-3 px-4 rounded-sm bg-[#333] outline-none"/>
        <input required autoComplete="off" type="password" placeholder="Contraseña" className="py-3 px-4 rounded-sm bg-[#333] outline-none"/>
        <button type="submit" className="mt-4 bg-[#e50914] p-3 rounded-sm">{title}</button>
      </form>
    </>
  )
}
