import { ILoginData } from "./auth.dto"
import { IGetUserData } from "./user.dto"

export interface IResponse {
  error?: string
  status: number
  data?: any
}

export interface IDataDto {
  Auth: {
    login: (data: ILoginData) => Promise<IResponse>
  },
  User: {
    getUserData: (data: IGetUserData) => Promise<IResponse>
  }
}
