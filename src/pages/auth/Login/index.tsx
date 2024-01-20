import { useState, useEffect } from "react"

import { useNavigation } from "../../../libs/Router"
import { useAuth } from "../../../contexts/Auth/hook"

import { validateLoginForm } from "./use-cases/validateLoginForm"

import { checkUseBiometry } from "../../../contexts/Auth/use-cases/checkUseBiometry"

import { Layout } from "./layout"

import { IErrors } from "./dto"

export default function Login() {
  const { logIn, user, logInUsingBiometry } = useAuth()
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

  async function tryToLoginUsingBiometry() {
    const useBiometry = await checkUseBiometry()

    if (useBiometry) {
      await logInUsingBiometry()
    }
  }

  useEffect(() => {
    if (user) {
      navigate("Home")
    } else {
      tryToLoginUsingBiometry()
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