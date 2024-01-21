import Storage from "../../../../../libs/Storage"

import { Product } from "../../../../models/Product"

import { ProductConstants } from "../../../../constants/Product"

export async function getUserProducts(userId: string) {
  const products = JSON.parse(await Storage.get(ProductConstants.PRODUCTS_KEY) ?? "[]")

  const userProducts = products.filter((product: Product) => product.user_id === userId)

  return {
    status: 200,
    data: userProducts
  }
}