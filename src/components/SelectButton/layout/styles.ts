import { StyleSheet } from "react-native"

import { moderateScale } from "../../../helpers/Metrics"

export default StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(16),
    marginHorizontal: moderateScale(8),
    maxHeight: moderateScale(49),
  },
  selectedButton: {
    backgroundColor: '#000',
  },
  selectedButtonText: {
    color: '#fff',
  },
})