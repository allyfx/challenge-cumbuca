import Validator from "../../../../helpers/Validator"

import { IErrors } from "../dto"

interface IProps {
  cpf: string
  password: string
  setErrors: (errors: IErrors) => void
}

export function validateLoginForm({ cpf, password, setErrors }: IProps) {
  let valid = true
  let errors: IErrors = {
    cpf: "",
    password: ""
  }

  if (!cpf || !password) {
    errors = {
      cpf: !cpf ? "Campo obrigatório" : errors.cpf,
      password: !password ? "Campo obrigatório" : errors.password
    }

    valid = false
  }

  const cpfValidate = Validator.CPF(cpf)
  const passwordValidate = Validator.Password(password)

  if (!cpfValidate || !passwordValidate) {
    errors = {
      cpf: cpfValidate ? errors.cpf : "CPF inválido",
      password: passwordValidate ? errors.password : "Senha inválida"
    }

    valid = false
  }

  setErrors(errors)

  return valid
}