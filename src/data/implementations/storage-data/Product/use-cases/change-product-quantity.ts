import Storage from "../../../../../libs/Storage"

import { ProductConstants } from "../../../../constants/Product"

import { Product } from "../../../../models/Product"

import { IChangeProductQuantityData } from "../../../../dtos/product.dto"

export async function ChangeProductQuantity(data: IChangeProductQuantityData) {
  const products = JSON.parse(await Storage.get(ProductConstants.PRODUCTS_KEY) ?? "[]")

  const productIndex = products.findIndex((product: Product) => product.id === data.productId)

  if (productIndex === -1) {
    return {
      status: 404,
      error: "Produto não encontrado"
    }
  }

  const product = products[productIndex]

  if (data.type === "add") {
    product.quantity += 1
  } else {
    product.quantity -= 1
  }

  products[productIndex] = product

  await Storage.set(ProductConstants.PRODUCTS_KEY, JSON.stringify(products))

  return {
    status: 200,
    data: products
  }
}