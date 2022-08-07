import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Bienvenido a Remix</h1>

      <Link to='/blog'>Ir al blog</Link>
      <hr/>
      <Link to='/contacto'>Ir a los contactos</Link>
    </div>
  );
}
