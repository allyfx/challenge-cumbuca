import { StyleSheet } from "react-native"

import { useTheme } from "../../../contexts/Theme/hook"

import { moderateScale } from "../../../helpers/Metrics"

export default function generateStyles() {
  const { theme } = useTheme()

  return StyleSheet.create({
    button: {
      backgroundColor: theme.white,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.black,
      justifyContent: 'center',
      paddingHorizontal: moderateScale(16),
      marginHorizontal: moderateScale(8),
      maxHeight: moderateScale(49),
    },
    selectedButton: {
      backgroundColor: theme.black,
    },
    buttonText: {
      color: theme.black,
    },
    selectedButtonText: {
      color: theme.white,
    },
  })
}
