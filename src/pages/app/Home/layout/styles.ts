import { StyleSheet } from "react-native"

import { useTheme } from "../../../../contexts/Theme/hook"

import { horizontalScale, moderateScale, verticalScale } from "../../../../helpers/Metrics"

export default function generateStyles() {
  const { theme } = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.white,
      paddingHorizontal: horizontalScale(16),
      marginTop: "20%"
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: moderateScale(16),
      marginBottom: verticalScale(20)
    },
    title: {
      fontSize: moderateScale(18),
      fontWeight: '500',
      color: theme.black,
      marginBottom: verticalScale(8)
    },
    subtitle: {
      fontSize: moderateScale(14),
      fontWeight: '400',
      color: theme.black,
      marginBottom: verticalScale(8)
    },
    order: {
      flexDirection: 'row',
      minHeight: verticalScale(58),
      maxHeight: verticalScale(58),
    },
    forms: {
      maxHeight: verticalScale(210),
      gap: verticalScale(24),
      marginBottom: verticalScale(24)
    },
    formsRow: {
      flexDirection: 'row',
      gap: horizontalScale(16)
    },
    productList: {
      paddingBottom: '12%',
      marginTop: verticalScale(16)
    }
  })
}
