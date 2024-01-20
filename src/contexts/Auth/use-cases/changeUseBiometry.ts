import Storage from "../../../libs/Storage";

import { AuthConstants } from "../constants/Auth";

export async function changeUseBiometry(newUseBiometry: boolean) {
  await Storage.set(AuthConstants.USE_BIOMETRY_KEY, JSON.stringify(newUseBiometry))
}