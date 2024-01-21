import { StyleSheet } from "react-native"

import { useTheme } from "../../../contexts/Theme/hook"

import { moderateScale } from "../../../helpers/Metrics"

export default function generateStyles() {
  const { theme } = useTheme()

  return StyleSheet.create({
    button: {
      backgroundColor: theme.black,
      borderRadius: 5,
      padding: moderateScale(15),
      width: "100%",
      alignItems: "center",
    },
    buttonText: {
      color: theme.white,
      fontWeight: "bold",
      fontSize: moderateScale(18),
    },
  })
}
