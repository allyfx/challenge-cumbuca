import { ICreateProductFormData, IErrors } from "../dto"

interface IProps {
  data: ICreateProductFormData
  setErrors: (errors: IErrors) => void
}

export function validateFormData({ data, setErrors }: IProps) {
  const { name, price, quantity } = data

  const errors: IErrors = {}

  if (!name) {
    errors.name = "Nome é obrigatório"
  }

  if (!price) {
    errors.price = "Preço é obrigatório"
  }

  if (price && price <= 0) {
    errors.price = "Preço deve ser maior que 0"
  }

  if (!quantity) {
    errors.quantity = "Quantidade é obrigatória"
  }

  if (quantity && quantity <= 0) {
    errors.quantity = "Quantidade deve ser maior que 0"
  }

  setErrors(errors)

  return Object.keys(errors).length === 0
}