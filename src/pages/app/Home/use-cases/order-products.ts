import { Product } from "../../../../data/models/Product"

export type OrderBy = 'name' | 'price' | 'total_price' | 'quantity' | undefined

interface IProps {
  orderBy: OrderBy
  products: Product[]
}

export function OrderProducts({ orderBy, products }: IProps) {
  if (!orderBy) return products

  const tempProducts = [...products]

  return tempProducts.sort((a, b) => {
    if (orderBy === 'name') {
      return a.name.localeCompare(b.name)
    } else {
      return a[orderBy] - b[orderBy]
    }
  })
}