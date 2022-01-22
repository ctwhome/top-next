import React, {useState} from 'react'
// import type {NextPage} from 'next'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import {useIdle, useMouseWheel} from 'react-use'
import Link from 'next/link'
import matter from 'gray-matter'
import Hello from 'components/Hello'
import Post from 'components/Post'

const Home = ({posts}) => {
  const [count, setCount] = useState(0)

  const mouseWheel = useMouseWheel()
  const isIdle = useIdle(2000)
  // Functions

  // Render
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Top Next - Starter
      </h1>

      <Link href="/about">
        <a className="btn">
        About Page in .md
        </a>
      </Link>


      <div className="mt-4">
        <Hello/>
      </div>

      <div>User is idle after 2 seconds?: {isIdle ? 'Yes 😴' : 'Nope'}</div>
      <button onClick={() => setCount(count + 1)}>
        Click me { count }
      </button>
      <div className="flex">{mouseWheel}</div>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

      <div>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    </>
  )
}
export async function getStaticProps() {
  const files = fs.readdirSync(path.join('content'))
  const sortOrder = (a, z) => {

    return new Date(z.frontmatter?.published) //- new Date(a.frontmatter?.published)
    //return new Date(z.frontmatter?.published) - new Date(a.frontmatter?.published)
  }
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdown = fs.readFileSync( path.join('content', filename), 'utf-8' )
    const {data: frontmatter} = matter(markdown)

    return {
      slug,
      frontmatter
    }
  })
  return {
    props: {
      posts: posts.sort(sortOrder as any),
    },
  }
}

export default Home
