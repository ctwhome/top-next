import {useState} from 'react'
// import type {NextPage} from 'next'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import {useIdle, useMouseWheel} from 'react-use'
import Link from 'next/link'
import matter from 'gray-matter'
import Hello from 'components/Hello'
import Post from 'components/Post'

import {UseState} from '../components/UseState'
import {ContextProviderComponentWrapper} from '../components/ContextProvider'


export function Parent() {
  const [data, setData] = useState('')

  const childToParent = (childdata) => {
    setData(childdata)
  }

  return (
    <div className="App">
      <div>
        <Child childToParent={childToParent}/>
        data: {data}
      </div>
    </div>
  )
}
export function Child({childToParent}) {
  const data = 'This is data from Child Component to the Parent Component.'
  return (
    <button className="btn" onClick={() => childToParent(data)}>Click Child</button>
  )
}


const Home = ({posts}) => {
  const [count, setCount] = useState(0)

  const mouseWheel = useMouseWheel()
  const isIdle = useIdle(2000)
  // Functions

  // Render
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold underline">
        Top Next - Starter
      </h1>


      <Link href="/about">
        <a className="btn">
          About Page in .md
        </a>
      </Link>

      <Link href="/notion">
        <a className="btn m-4"> See pages from Notion</a>
      </Link>


      <div className="mt-4">
        <Hello/>
      </div>

      <div>User is idle after 2 seconds?: {isIdle ? 'Yes 😴' : 'Nope'}</div>
      <button onClick={() => setCount(count + 1)}>
        Click me {count}
      </button>
      <div className="flex">{mouseWheel}</div>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>

      <div>
        {posts.map((post, index) => (
          <Post post={post} key={index}/>
        ))}
      </div>


      ---

      <UseState className="mt-10"/>

      ---

      <ContextProviderComponentWrapper className="mt-10"/>

      <br/><hr/><br/>

      Exmaple with parent - child communication via props
      <Parent />
    </div>
  )
}


// SSR running
export async function getStaticProps() {
  const files = fs.readdirSync(path.join('content'))
  const sortOrder = (a, z) => {

    return new Date(z.frontmatter?.published) //- new Date(a.frontmatter?.published)
    //return new Date(z.frontmatter?.published) - new Date(a.frontmatter?.published)
  }
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdown = fs.readFileSync(path.join('content', filename), 'utf-8')
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
