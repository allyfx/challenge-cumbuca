import { StyleSheet } from "react-native"

import { useTheme } from "../../../../../../contexts/Theme/hook"

import { moderateScale } from "../../../../../../helpers/Metrics"

export default function generateStyles() {
  const { theme } = useTheme()

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.white,
      borderWidth: 1,
      borderColor: theme.gray,
      borderRadius: moderateScale(8),
      padding: moderateScale(16),
      marginBottom: moderateScale(16),
    },
    actions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: moderateScale(8),
    },
    actionsWrapper: {
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    text: {
      color: theme.black,
    }
  })
}
