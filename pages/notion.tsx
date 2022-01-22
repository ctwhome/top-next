import {Client} from '@notionhq/client'
import Hello from 'components/Hello'

const Notion = ({data, posts}) => {
  return <>
    <Hello/>
    {posts.map((post, index) => <div className="bg-yellow-900" key={index}>{post}</div>)}

    <pre>{JSON.stringify(posts, null, 2)}</pre>
  </>
}
export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET
  })

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID || '',
  })

  const posts = []
  data.results.forEach((result) => {
    // @ts-ignore
    if (result.type === 'child_page') {
      // @ts-ignore
      posts.push(result.child_page?.title)
    }
  })

  return {
    props: {
      data,
      posts
    }
  }
}

// export const getStaticProps= async ()=>{
//   // fetch data
//   // create static pages
//   const quote = await fetch(
//     "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
//   ).then((resp)=> resp.json())
//
//   return {
//     props:{
//       quote
//     }
//   }
// }

export default Notion
