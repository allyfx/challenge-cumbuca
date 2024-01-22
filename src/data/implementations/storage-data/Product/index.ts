import { CreateProduct } from "./use-cases/create-product"
import { RemoveProduct } from "./use-cases/remove-product"
import { getUserProducts } from "./use-cases/get-user-products"
import { ChangeProductQuantity } from "./use-cases/change-product-quantity"

import { IChangeProductQuantityData, ICreateProductData } from "../../../dtos/product.dto"
import { IResponse } from "../../../dtos/data.dto"

export const Product = {
  async create(data: ICreateProductData): Promise<IResponse> {
    return CreateProduct(data)
  },
  async getUserProducts(userId: string): Promise<IResponse> {
    return getUserProducts(userId)
  },
  async changeProductQuantity(data: IChangeProductQuantityData): Promise<IResponse> {
    return ChangeProductQuantity(data)
  },
  async remove(productId: number, userId: string): Promise<IResponse> {
    return RemoveProduct(productId, userId)
  }
}