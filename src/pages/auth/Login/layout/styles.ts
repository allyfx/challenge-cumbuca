import { StyleSheet } from "react-native"

import { useTheme } from "../../../../contexts/Theme/hook"

import { horizontalScale, moderateScale, verticalScale } from "../../../../helpers/Metrics"

export default function generateStyles() {
  const { theme } = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.white,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: horizontalScale(16),
      rowGap: verticalScale(12),
      marginTop: "20%",
    },
    title: {
      fontSize: moderateScale(24),
      fontWeight: '500',
      marginBottom: verticalScale(8),
      color: theme.black,
    },
    subtitle: {
      fontSize: moderateScale(16),
      marginBottom: verticalScale(16),
      color: theme.black,
    },
    alert: {
      width: moderateScale(280),
      fontSize: moderateScale(14),
      marginBottom: verticalScale(8),
      textAlign: 'center'
    }
  })
}
