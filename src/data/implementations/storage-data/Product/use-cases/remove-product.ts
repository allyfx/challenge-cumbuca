import Storage from "../../../../../libs/Storage"

import { Product } from "../../../../models/Product"

import { ProductConstants } from "../../../../constants/Product"

export async function RemoveProduct(productId: number) {
  const products = JSON.parse(await Storage.get(ProductConstants.PRODUCTS_KEY) ?? "[]")

  const productIndex = products.findIndex((product: any) => product.id === productId)

  if (productIndex === -1) {
    return {
      status: 404,
      error: "Produto não encontrado"
    }
  }

  const newProducts = products.filter((product: Product) => product.id !== productId)
  await Storage.set(ProductConstants.PRODUCTS_KEY, JSON.stringify(newProducts))

  const availableIds = JSON.parse(await Storage.get(ProductConstants.AVAILABLE_IDS) ?? "[]")
  await Storage.set(ProductConstants.AVAILABLE_IDS, JSON.stringify([...availableIds, productId]))

  return {
    status: 200,
    data: newProducts
  }
}