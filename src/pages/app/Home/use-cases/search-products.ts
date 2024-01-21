import { Product } from "../../../../data/models/Product"

export function SearchProducts(search: string, products: Product[]) {
  if (!search) return products

  return products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
}