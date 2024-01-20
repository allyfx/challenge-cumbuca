import { ReactNode } from "react"

import { User } from "../../data/models/User"
import { ILoginData, IResponse } from "../../data/dtos/data.dto"

export interface IAuthContext {
  user?: User
  logIn: (data: ILoginData) => Promise<IResponse>
  logInUsingBiometry: () => Promise<void>
  logOut: () => Promise<void>
}

export interface IProviderProps {
  children: ReactNode
}