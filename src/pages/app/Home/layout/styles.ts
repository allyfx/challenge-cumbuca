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
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    color: '#000',
    marginBottom: verticalScale(8)
  },
  forms: {
    flex: 1,
    gap: verticalScale(12)
  },
  formsRow: {
    flexDirection: 'row',
    gap: horizontalScale(16)
  },
  productList: {
    flex: 1,
  },
})