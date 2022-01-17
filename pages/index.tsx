import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  // Functions

  // Render
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>   
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </>
  )
}

export default Home
