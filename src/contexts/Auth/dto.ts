import { ReactNode } from "react"

import { User } from "../../data/models/User"
import { IResponse } from "../../data/dtos/data.dto"
import { ILoginData } from "../../data/dtos/auth.dto"

export interface IAuthContext {
  user?: User
  logIn: (data: ILoginData) => Promise<IResponse>
  logInUsingBiometry: () => Promise<void>
  logOut: () => Promise<void>
  fetchedInfos: boolean
}

export interface IProviderProps {
  children: ReactNode
}