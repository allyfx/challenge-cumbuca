import { StyleSheet } from "react-native"

import { useTheme } from "../../../contexts/Theme/hook"

import { horizontalScale, moderateScale, verticalScale } from "../../../helpers/Metrics"

export default function generateStyles() {
  const { theme } = useTheme()
  
  return StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      maxHeight: verticalScale(52),
    },
    textWrapper: {
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      height: verticalScale(50),
      padding: moderateScale(10),
      borderRadius: 5,
      backgroundColor: theme.white,
      borderWidth: 1,
      borderColor: theme.gray,
      paddingRight: horizontalScale(45),
      color: theme.black,
    },
    error: {
      color: "red"
    },
    passwordText: {
      position: 'absolute',
      right: moderateScale(10),
      color: theme.black,
      fontSize: moderateScale(12),
    }
  })
}
