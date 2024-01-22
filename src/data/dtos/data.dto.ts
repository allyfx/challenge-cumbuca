import { ILoginData } from "./auth.dto"
import { IChangeProductQuantityData, ICreateProductData } from "./product.dto"
import { IGetUserData } from "./user.dto"

export interface IResponse {
  error?: string
  status: number
  data?: any
}

export interface IDataDto {
  Auth: {
    login: (data: ILoginData) => Promise<IResponse>
  },
  User: {
    getUserData: (data: IGetUserData) => Promise<IResponse>
  },
  Product: {
    create: (data: ICreateProductData) => Promise<IResponse>
    getUserProducts: (userId: string) => Promise<IResponse>
    changeProductQuantity: (data: IChangeProductQuantityData) => Promise<IResponse>
    remove: (productId: number, userId: string) => Promise<IResponse>
  }
}
