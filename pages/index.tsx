import React, { useState } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'
import { useIdle, useMouseWheel } from 'react-use';
import Hello from '../components/Hello';
import Link from 'next/link';

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  const mouseWheel = useMouseWheel()
  const isIdle = useIdle(2000);
  // Functions
  // Render
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world! 
      </h1>   

      <Link href="/about">About Page in .md</Link>

      <Hello/>

       <div>User is idle after 2 seconds?: {isIdle ? 'Yes 😴' : 'Nope'}</div>
       <button onClick={() => setCount(count + 1)}>
        Click me { count }
      </button>
      <div className="flex">{mouseWheel}</div>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </>
  )
}


export default Home
