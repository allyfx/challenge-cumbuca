import { StyleSheet } from "react-native"

import { horizontalScale, moderateScale, verticalScale } from "../../../helpers/Metrics"

export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'column',
  },
  textWrapper: {
    width: "100%",
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: "100%",
    height: verticalScale(50),
    padding: moderateScale(10),
    borderRadius: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingRight: horizontalScale(45)
  },
  error: {
    color: "red"
  },
  passwordText: {
    position: 'absolute',
    right: moderateScale(10),
    color: "#000",
    fontSize: moderateScale(12),
  }
})