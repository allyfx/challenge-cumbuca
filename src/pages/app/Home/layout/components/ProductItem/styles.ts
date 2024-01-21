import { StyleSheet } from "react-native"

import { moderateScale } from "../../../../../../helpers/Metrics"

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
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
  }
})