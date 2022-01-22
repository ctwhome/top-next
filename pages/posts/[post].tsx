import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

export const getServerSideProps = async context => {
  const fs = require('fs')
  const {post} = context.params
  const content = fs.readFileSync(`${process.cwd()}/content/${post}.md`, 'utf8')
  return {
    props: {content}
  }
}

export default function Blog(props) {
  const {data, content} = matter(props.content)
  return (
    <div id="blog-post-container" className="mx-auto mt-10 prose">
      <Link href="/"><div className="btn">Go Back</div></Link>
      <div className="container">
        <h1 className="header">{data.title}</h1>
        <h3>{data.description}</h3>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
