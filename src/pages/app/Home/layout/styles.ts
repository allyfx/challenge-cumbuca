import { StyleSheet } from "react-native"

import { horizontalScale, moderateScale, verticalScale } from "../../../../helpers/Metrics"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: horizontalScale(16),
    marginTop: "20%"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(16),
    marginBottom: verticalScale(20)
  }
})