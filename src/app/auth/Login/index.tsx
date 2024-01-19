import { useState } from "react"

import { validateLoginForm } from "./use-cases/validateLoginForm"

import data from "../../../data"

import { Layout } from "./layout"

import { IErrors } from "./dto"

export default function Login() {
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState<IErrors>({
    cpf: "",
    password: ""
  })

  async function onSubmit() {
    const isFormValid = validateLoginForm({
      cpf,
      password,
      setErrors
    })

    if (!isFormValid) return

    const response = await data.Auth.login({
      cpf,
      password
    })

    if (response.status === 200) {
      console.log(response.data)
    } else {
      setErrors({
        cpf: "CPF ou Senha inválidos",
        password: "CPF ou Senha inválidos"
      })
    }
  }

  return (
    <Layout
      onSubmit={onSubmit}
      password={password}
      cpf={cpf}
      changePassword={setPassword}
      changeCpf={setCpf}
      errors={errors}
    />
  )
}