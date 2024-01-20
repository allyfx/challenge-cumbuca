import Storage from "../../../libs/Storage";

import { AuthConstants } from "../constants/Auth";

export async function checkUseBiometry() {
  const useBiometry = await Storage.get(AuthConstants.USE_BIOMETRY_KEY) ?? "false"
  
  return JSON.parse(useBiometry)
}