import { Appearance } from "react-native"

import Storage from "../../../libs/Storage"

import { ThemeConstants } from "../constants/Theme"

export async function ToggleThemeOption() {
  const themeOption = await Storage.get(ThemeConstants.DARK_MODE_KEY) ?? "light"
  let newTheme = themeOption as "dark" | "light"

  if (themeOption === "dark") {
    await Storage.set(ThemeConstants.DARK_MODE_KEY, "light")
    newTheme =  "light"
  } else {
    await Storage.set(ThemeConstants.DARK_MODE_KEY, "dark")
    newTheme =  "dark"
  }

  Appearance.setColorScheme(newTheme)

  return newTheme
}