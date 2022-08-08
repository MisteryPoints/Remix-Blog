import { useEffect } from "react"
import { useSubmit, useTransition } from "@remix-run/react"

export default function UseSubmit() {
    useSessionTimeout()
  return (
    <div>
        <h1>useSubmit</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, reprehenderit quaerat officia fuga natus, provident beatae voluptate eligendi tenetur consequuntur ullam, dolores dignissimos sapiente ut officiis. Reprehenderit odit doloribus aperiam?</p>
    </div>
  )
}

function useSessionTimeout(){
    const submit = useSubmit()
    const transition = useTransition()

    useEffect(() => {
        const timer = setTimeout(() => {
            submit(null, {method:'post', action:'/logout'})
        }, 10000);

        return () => clearTimeout(timer)
    }, [submit, transition]);
}