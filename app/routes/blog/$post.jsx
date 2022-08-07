import { Link, useLoaderData } from "@remix-run/react"
import { loader as postsApi } from '../api/posts'

export default function Post() {
  const post = useLoaderData() 
  const {title, description} = post
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <Link to='/blog'>Volver</Link>
    </div>
  )
}

export const loader = (props) => {
  const post = postsApi().find(post => post.slug === props.params.post)
  return post
}