import { Form, useActionData } from "@remix-run/react"

export default function Component() {
  const data = useActionData()
  return (
    <div>
        <h1>useActionData</h1>
        <Form method="post">
            <p>Nombre:</p>
            <input type="text" name="firstname" />
            <br/>

            <p>Apellidos:</p>
            <input type="text" name="lastname" />
            <br/>

            <p>Edad:</p>
            <input type="number" name="years" />
            <br/>

            <button type="submit">Enviar</button>
            <br/>

            <p>{data ? data.message : "Esperando Resultado..."}</p>
        </Form>
    </div>
  )
}

export async function action (props) {
  const { request } = props
  const body = await request.formData()
  const firstname = body.get('firstname')
  const lastname = body.get('lastname')
  const years = body.get('years')

  return {message: `Hola ${firstname} ${lastname} tienes ${years} años`}
}