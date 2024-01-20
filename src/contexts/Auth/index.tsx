import { createContext, useState, useEffect } from "react"

import Storage from "../../libs/Storage"
import { AuthConstants } from "./constants/Auth"

import { checkBiometryIsAvailable } from "./use-cases/checkBiometryIsAvailable"
import { biometryAlert } from "./use-cases/biometryAlert"

import data from "../../data"

import { User } from "../../data/models/User"
import { IAuthContext, IProviderProps } from "./dto"
import { ILoginData } from "../../data/dtos/auth.dto"

export const AuthContext = createContext({} as IAuthContext)

export default function AuthProvider({ children }: IProviderProps) {
  const [user, setUser] = useState<User>()
  const [fetchedInfos, setFetchedInfos] = useState(false);

  async function logIn({ cpf, password }: ILoginData) {
    biometryAlert()

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
      await Storage.set(
        AuthConstants.BIOMETRIC_USER_CPF_KEY,
        response.data.cpf
      )
    }

    return response
  }

  async function logInUsingBiometry() {
    const biometryResponse = await checkBiometryIsAvailable()

    if (biometryResponse.success) {
      const cpf = await Storage.get(AuthConstants.BIOMETRIC_USER_CPF_KEY)

      if (!cpf) return

      const response = await data.User.getUserData({ cpf })

      if (response.status === 200) {
        setUser(response.data)

        await Storage.set(
          AuthConstants.LOGGED_USER_KEY,
          JSON.stringify(response.data)
        )

        return {
          ...response.data,
          password: null
        }
      }
    }
  }

  async function logOut() {
    setUser(undefined)

    await Storage.remove(AuthConstants.LOGGED_USER_KEY)
  }

  useEffect(() => {
    async function loadStorageData() {
      const loggedUser = await Storage.get(AuthConstants.LOGGED_USER_KEY)

      if (loggedUser) {
        setUser(JSON.parse(loggedUser))
      }

      setFetchedInfos(true)
    }

    loadStorageData()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      logIn,
      logOut,
      logInUsingBiometry,
      fetchedInfos
    }}>
      {children}
    </AuthContext.Provider>
  )
}