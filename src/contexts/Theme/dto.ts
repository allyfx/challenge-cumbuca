import { ReactNode } from "react"

export interface IThemeContext {
  theme: {
    white: string
    black: string
    primary: string
    gray: string
  }
  toggleTheme(): void
  usingDarkTheme: boolean
}

export interface IProviderProps {
  children: ReactNode
}
