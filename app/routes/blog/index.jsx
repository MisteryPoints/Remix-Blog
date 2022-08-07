import { Link, useLoaderData } from "@remix-run/react"
import { loader as postsApi } from '../api/posts'

export default function Blog() {
  const posts = useLoaderData() 
  return (
    <div>
      <h1>Estamos en el blog</h1>
      <Link to='/blog/post'>Ir a los Post dinámicos</Link>
      <hr/>
      
      {posts.map(post => (
          <>
            <Link to={`/blog/${post.slug}`}>Ir a la entrada '{post.title}'</Link>  
            <br/>       
          </>
      ))}
      {/* <Link to='/blog/categories/x'>Ir a las Categorías dinámicas</Link>
      <br/>
      <Link to='/blog/categories/nextjs'>Ir a las Categoría NextJS</Link>
      <br/>
      <Link to='/blog/categories/remixjs'>Ir a las Categoría RemixJS</Link>
      <br/> */}
    </div>
  )
}

export const loader = (props) => {
  return postsApi()
}
