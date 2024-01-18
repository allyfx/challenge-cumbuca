import Storage from "../../../../../libs/Storage";

import { User } from "../../../../models/User";

import { UserConstants } from "../../../../constants/User"

import { IResponse } from "../../../../dtos/data.dto";

interface IProps {
  user: User
  password: string
}

export async function LoginUser({ user, password }: IProps): Promise<IResponse> {
  const passwordMatch = user.password === password

  if (passwordMatch) {
    const users = JSON.parse(await Storage.get(UserConstants.USERS_KEY) ?? '[]')
    await Storage.set(UserConstants.USERS_KEY, JSON.stringify(users.map((user: User) => {
      if (user.cpf === user.cpf) {
        return {
          ...user,
          last_access: new Date()
        }
      }

      return user
    })))

    return {
      status: 200,
      data: user
    }
  }

  return {
    status: 401,
    error: 'CPF ou Senha incorretos'
  }
}