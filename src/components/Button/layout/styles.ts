import { StyleSheet } from "react-native"

import { moderateScale } from "../../../helpers/Metrics"

export default StyleSheet.create({
  button: {
    backgroundColor: "#000",
    borderRadius: 5,
    padding: moderateScale(15),
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: moderateScale(18),
  },
})