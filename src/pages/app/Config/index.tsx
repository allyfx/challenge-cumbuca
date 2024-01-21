import { useState, useEffect } from "react"

import { useNavigation } from "../../../libs/Router"
import { useAuth } from "../../../contexts/Auth/hook"
import { useTheme } from "../../../contexts/Theme/hook"

import { checkUseBiometry } from "../../../contexts/Auth/use-cases/checkUseBiometry"
import { changeUseBiometry } from "../../../contexts/Auth/use-cases/changeUseBiometry"

import { Layout } from "./layout"

export default function Config() {
  const { goBack } = useNavigation()
  const { logOut } = useAuth()
  const { toggleTheme, usingDarkTheme } = useTheme()

  const [useBiometry, setUseBiometry] = useState(false)

  async function changeUseBiometryOption() {
    setUseBiometry(!useBiometry)
    await changeUseBiometry(!useBiometry)
  }

  useEffect(() => {
    async function getUseBiometry() {
      setUseBiometry(!!await checkUseBiometry())
    }

    getUseBiometry()
  }, [])

  return (
    <Layout
      goBack={goBack}
      useBiometry={useBiometry}
      onChangeUseBiometry={changeUseBiometryOption}
      onChangeUseDarkTheme={toggleTheme}
      usingDarkTheme={usingDarkTheme}
      logOut={logOut}
    />
  )
}
