import { StyleSheet } from "react-native"

import { useTheme } from "../../../../contexts/Theme/hook"

import { horizontalScale, moderateScale } from "../../../../helpers/Metrics"

export default function generateStyles() {
  const { theme } = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.white,
      marginTop: "20%",
      gap: moderateScale(24),
      paddingHorizontal: horizontalScale(16)
    },
    content: {
      marginLeft: horizontalScale(16),
      gap: moderateScale(24)
    },
    goBackText: {
      color: theme.black,
      fontSize: moderateScale(16),
      fontWeight: "bold"
    },
    biometryText: {
      color: theme.black,
      fontSize: moderateScale(16),
    },
    header: {
      width: horizontalScale(80),
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      gap: moderateScale(16)
    },
    biometryCheckbox: {
      flexDirection: "row",
      alignItems: "center",
      gap: moderateScale(8)
    }
  })
}
