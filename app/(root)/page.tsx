import Image from "next/image"
import Link from "next/link"


export default function Home() {
  const bgUrl = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  return (

    <main className='relative flex flex-col text-white w-full h-screen justify-center items-center'>
      <div className="static top-0 right-0 bottom-0 left-0 z-0 w-full h-screen bg-center">
        <Image
          src={bgUrl}
          alt="background image"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </div>
      <h1 className='home-decor text-2xl'>
        Home Decor
      </h1>
      <div>
        <button className="absolute z-10 border  text-slate-900 border-slate-900 p-5 rounded-2xl top-[45%] left-[50%] translate-x-[-50%]">
          <Link href="/">Home</Link>
        </button>
      </div>
    </main>
  )
}
