import Storage from "../../../../../libs/Storage"

import { generateProductId } from "../utils/generateProductId"

import { ProductConstants } from "../../../../constants/Product"

import { Product } from "../../../../models/Product"

import { ICreateProductData } from "../../../../dtos/product.dto"

export async function CreateProduct(data: ICreateProductData) {
  const { name, quantity, price, userId } = data

  const dataValidationError = validateData(data)

  if (dataValidationError) return dataValidationError

  const products = JSON.parse(await Storage.get(ProductConstants.PRODUCTS_KEY) ?? "[]")

  const productId = await generateProductId({ produtsLength: products.length })

  const newProducts = [...products, {
    id: productId,
    name,
    price,
    quantity,
    total_price: price * quantity,
    user_id: userId
  }]

  await Storage.set(ProductConstants.PRODUCTS_KEY, JSON.stringify(newProducts))

  return {
    status: 201,
    data: newProducts.filter((product: Product) => product.user_id === userId)
  }
}

function validateData(data: ICreateProductData) {
  const { name, quantity, userId } = data

  if (!name) {
    return {
      status: 400,
      error: "Nome é obrigatório"
    }
  }

  if (!quantity) {
    return {
      status: 400,
      error: "Quantidade é obrigatória"
    }
  }

  if (quantity <= 0) {
    return {
      status: 400,
      error: "Quantidade deve ser maior que 0"
    }
  }

  if (!userId) {
    return {
      status: 400,
      error: "Id do usuário é obrigatório"
    }
  }
}
