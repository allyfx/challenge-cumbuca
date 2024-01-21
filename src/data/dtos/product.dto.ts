export interface ICreateProductData {
  name: string
  price: number
  quantity: number
  userId: string
}

export interface IChangeProductQuantityData {
  productId: number
  type: "add" | "remove"
  userId: string
}