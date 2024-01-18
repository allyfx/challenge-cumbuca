import { User } from "../../../../models/User";

import { IResponse } from "../../../../dtos/data.dto";

interface IProps {
  user: User
  password: string
}

export function LoginUser({ user, password }: IProps): IResponse {
  const passwordMatch = user.password === password

  if (passwordMatch) {
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