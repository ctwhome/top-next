import Link from 'next/link'

export default function ({post}: {post:any}) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="btn btn-primary">
        <a><h3>{post.frontmatter.title}</h3></a>
        <img src={post.frontmatter.thumbnail} />
        <p>{post.frontmatter.published}</p>
        <p>{post.frontmatter.teaser}</p>
        <hr />
      </div>
    </Link>
  )
}
