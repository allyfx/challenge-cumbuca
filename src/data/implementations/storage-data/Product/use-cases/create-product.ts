import Storage from "../../../../../libs/Storage"

import { generateProductId } from "../utils/generateProductId"

import { ProductConstants } from "../../../../constants/Product"

import { ICreateProductData } from "../../../../dtos/product.dto"

export async function CreateProduct(data: ICreateProductData) {
  const { name, quantity, userId } = data

  const dataValidationError = validateData(data)

  if (dataValidationError) return dataValidationError

  const products = JSON.parse(await Storage.get(ProductConstants.PRODUCTS_KEY) ?? "[]")

  const productId = await generateProductId({ produtsLength: products.length })

  const newProducts = [...products, {
    id: productId,
    name,
    quantity,
    user_id: userId
  }]

  await Storage.set(ProductConstants.PRODUCTS_KEY, JSON.stringify(newProducts))

  return {
    status: 201,
    data: newProducts
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

  if (!userId) {
    return {
      status: 400,
      error: "Id do usuário é obrigatório"
    }
  }
}
