import { GetUserData } from "./use-cases/getUserData"

import { IResponse } from "../../../dtos/data.dto"
import { IGetUserData } from "../../../dtos/user.dto"

export const User = {
  async getUserData({ cpf }: IGetUserData): Promise<IResponse> {
    return GetUserData({ cpf })
  },
}