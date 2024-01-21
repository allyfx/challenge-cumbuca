import { createContext, useState, useEffect } from "react"

import useTheme from "../../styles/theme"

import { ToggleThemeOption } from "./use-cases/toggle-theme-option"
import { GetThemeOption } from "./use-cases/get-theme-option"

import { IProviderProps, IThemeContext } from "./dto"

export const ThemeContext = createContext({} as IThemeContext)

export default function ThemeProvider({ children }: IProviderProps) {
  const [theme, setTheme] = useState<"dark" | "light">("light")

  async function changeUseDarkTheme() {
    setTheme(await ToggleThemeOption())
  }
  
  useEffect(() => {
    async function getThemeOption() {
      setTheme(await GetThemeOption())
    }

    getThemeOption()
  }, [])

  return (
    <ThemeContext.Provider value={{
      theme: useTheme(theme),
      toggleTheme: changeUseDarkTheme,
      usingDarkTheme: theme === "dark"
    }}>
      {children}
    </ThemeContext.Provider>
  )
}