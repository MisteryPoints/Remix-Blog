import { Link } from "@remix-run/react"
 

export default function Category() {
  return (
    <div>
        <h1>Estas en una categoria dinámica</h1>
        <Link to='/blog'>Volver</Link>
    </div>
  )
}
