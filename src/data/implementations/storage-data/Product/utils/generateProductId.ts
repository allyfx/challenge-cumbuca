import Storage from "../../../../../libs/Storage"

import { ProductConstants } from "../../../../constants/Product"

interface IProps {
  produtsLength: number
}

export async function generateProductId({ produtsLength }: IProps) {
  const availableIds = JSON.parse(await Storage.get(ProductConstants.AVAILABLE_IDS) ?? "[]")

  if (availableIds.length > 0) {
    const id = availableIds[0]

    availableIds.splice(0, 1)

    await Storage.set(ProductConstants.AVAILABLE_IDS, JSON.stringify(availableIds))

    return id
  }

  return produtsLength + 1
}