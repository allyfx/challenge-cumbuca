import Storage from "../../../../../libs/Storage"

import Validator from "../../../../../helpers/Validator"

import { UserConstants } from "../../../../constants/User"

import { IResponse } from "../../../../dtos/data.dto"

interface IProps {
  cpf: string
  password: string
}

export async function CreateUser({ cpf, password }: IProps): Promise<IResponse> {
  const cpfIsValid = Validator.CPF(cpf)

  if (!cpfIsValid) {
    return {
      error: 'CPF Inválido',
      status: 400
    }
  }

  const passwordIsValid = Validator.Password(password)

  if (!passwordIsValid) {
    return {
      error: 'Senha Inválida',
      status: 400
    }
  }

  const newUser = {
    id: Math.random().toString(36),
    cpf,
    password,
    last_access: new Date()
  }

  const users = JSON.parse(await Storage.get(UserConstants.USERS_KEY) ?? '[]')
  await Storage.set(UserConstants.USERS_KEY, JSON.stringify([...users, newUser]))

  return {
    status: 200,
    data: newUser
  }
}