import { Alert } from "react-native"

import Storage from "../../../libs/Storage"

import { AuthConstants } from "../constants/Auth"

export async function biometryAlert() {
  const useBiometry = await Storage.get(AuthConstants.USE_BIOMETRY_KEY)

  if (!useBiometry) {
    Alert.alert("Biometria", "Deseja ativar a biometria?", [
      {
        text: "Sim",
        onPress: async () => {
          await Storage.set(
            AuthConstants.USE_BIOMETRY_KEY,
            JSON.stringify(true)
          )
        },
      },
      {
        text: "Não",
      },
    ])
  }
}