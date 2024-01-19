import Storage from "../../../../libs/Storage"

import { LoginUser } from "./use-cases/loginUser"
import { CreateUser } from "./use-cases/createUser"

import { UserConstants } from "../../../constants/User"

import { ILoginData, IResponse } from "../../../dtos/data.dto"

export const Auth = {
  async login({ cpf, password }: ILoginData): Promise<IResponse> {
    const users = JSON.parse(await Storage.get(UserConstants.USERS_KEY) ?? '[]')
    const userExists = users.find((user: any) => user.cpf === cpf)

    if (userExists) {
      return LoginUser({ user: userExists, password })
    }

    return CreateUser({ cpf, password })
  },
}