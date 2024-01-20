import { StyleSheet } from "react-native"

import { horizontalScale, moderateScale } from "../../../../helpers/Metrics"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: "20%",
    gap: moderateScale(24),
    paddingHorizontal: horizontalScale(16)
  },
  content: {
    marginLeft: horizontalScale(16),
    gap: moderateScale(24)
  },
  goBackText: {
    color: "#000",
    fontSize: moderateScale(16),
    fontWeight: "bold"
  },
  biometryText: {
    color: "#000",
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
