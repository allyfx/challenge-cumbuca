import Storage from "../../../../../libs/Storage"

import { UserConstants } from "../../../../constants/User"

import { IResponse } from "../../../../dtos/data.dto"

interface IProps {
  cpf: string
}

export async function GetUserData({ cpf }: IProps): Promise<IResponse> {
  const users = JSON.parse(await Storage.get(UserConstants.USERS_KEY) ?? '[]')
  const userExists = users.find((user: any) => user.cpf === cpf)

  if (!userExists) {
    return {
      status: 404,
      error: 'Usuário não encontrado.'
    }
  }

  return {
    status: 200,
    data: {
      ...userExists,
      password: null
    }
  }
}