import { createContext, useState, useEffect } from "react"

import Storage from "../../libs/Storage"
import { AuthConstants } from "./constants/Auth"

import data from "../../data"

import { User } from "../../data/models/User"
import { IAuthContext, IProviderProps } from "./dto"
import { ILoginData } from "../../data/dtos/data.dto"

export const AuthContext = createContext({} as IAuthContext)

export default function AuthProvider({ children }: IProviderProps) {
  const [user, setUser] = useState<User>()

  async function logIn({ cpf, password }: ILoginData) {
    const response = await data.Auth.login({
      cpf,
      password
    })

    if (response.status === 200) {
      setUser(response.data)

      await Storage.set(
        AuthConstants.LOGGED_USER_KEY,
        JSON.stringify(response.data)
      )
    }

    return response
  }

  useEffect(() => {
    async function loadStorageData() {
      const loggedUser = await Storage.get(AuthConstants.LOGGED_USER_KEY)

      if (loggedUser) {
        setUser(JSON.parse(loggedUser))
      }
    }

    loadStorageData()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      logIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}