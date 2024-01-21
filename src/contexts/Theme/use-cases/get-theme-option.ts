import { Appearance } from "react-native"

import Storage from "../../../libs/Storage"

import { ThemeConstants } from "../constants/Theme"

export async function GetThemeOption(): Promise<"dark" | "light"> {
  const themeOption = await Storage.get(ThemeConstants.DARK_MODE_KEY) as "dark" | "light"
  Appearance.setColorScheme(themeOption ?? "light")
  return themeOption ?? "light"
}