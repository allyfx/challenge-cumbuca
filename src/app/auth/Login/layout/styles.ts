import { StyleSheet } from "react-native"

import { horizontalScale, moderateScale, verticalScale } from "../../../../helpers/Metrics"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(16),
    rowGap: verticalScale(12)
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '500',
    marginBottom: verticalScale(8)
  },
  subtitle: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(16)
  }
})