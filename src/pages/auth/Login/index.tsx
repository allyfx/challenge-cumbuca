import { useState, useEffect } from "react"
import { useNavigation } from "../../../libs/Router"
import { useAuth } from "../../../contexts/Auth/hook"

import { validateLoginForm } from "./use-cases/validateLoginForm"

import { Layout } from "./layout"

import { IErrors } from "./dto"

export default function Login() {
  const { logIn, user } = useAuth()
  const { navigate } = useNavigation()

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

    const response = await logIn({
      cpf,
      password
    })

    if (response.status !== 200) {
      setErrors({
        cpf: "CPF ou Senha inválidos",
        password: "CPF ou Senha inválidos"
      })
    }
  }

  useEffect(() => {
    if (user) {
      navigate("Home")
    }
  }, [user])

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