import { Product } from "../../data/models/Product"

import { OrderProducts } from "../../pages/app/Home/use-cases/order-products"
import { SearchProducts } from "../../pages/app/Home/use-cases/search-products"
import { validateFormData } from "../../pages/app/Home/use-cases/validate-form-data"

describe('Home UseCases Test', () => {
  it("should return error if formData is not valid", () => {
    const data = {
      name: "",
      price: -1,
      quantity: -1,
    }

    function setErrors(errors: any) {
      expect(errors).toEqual({
        name: "Nome é obrigatório",
        price: "Preço deve ser maior que 0",
        quantity: "Quantidade deve ser maior que 0",
      })
    }

    validateFormData({
      data,
      setErrors
    })
  })

  it("should return success if formData is valid", () => {
    const data = {
      name: "Produto de Teste",
      price: 10,
      quantity: 11,
    }

    function setErrors(errors: any) {
      expect(errors).toEqual({})
    }

    validateFormData({
      data,
      setErrors
    })
  })

  it("should search products", () => {
    const products: Product[] = [
      {
        id: 1,
        name: "Produto 1",
        price: 10,
        quantity: 10,
        total_price: 100,
        user_id: 'test-id',
      },
      {
        id: 2,
        name: "Produto 2",
        price: 20,
        quantity: 20,
        total_price: 100,
        user_id: 'test-id',
      },
    ]

    const search = "Produto 1"

    const result = SearchProducts(search, products)

    expect(result).toEqual([
      {
        id: 1,
        name: "Produto 1",
        price: 10,
        quantity: 10,
        total_price: 100,
        user_id: 'test-id',
      },
    ])
  })

  it("should order products", () => {
    const products: Product[] = [
      {
        id: 2,
        name: "Produto 2",
        price: 10,
        quantity: 10,
        total_price: 100,
        user_id: 'test-id',
      },
      {
        id: 1,
        name: "Produto 1",
        price: 20,
        quantity: 20,
        total_price: 100,
        user_id: 'test-id',
      },
    ]

    const orderBy = "name"

    const result = OrderProducts({
      orderBy,
      products
    })

    expect(result).toEqual([
      {
        id: 1,
        name: "Produto 1",
        price: 20,
        quantity: 20,
        total_price: 100,
        user_id: 'test-id',
      },
      {
        id: 2,
        name: "Produto 2",
        price: 10,
        quantity: 10,
        total_price: 100,
        user_id: 'test-id',
      },
    ])

    const orderBy2 = "price"

    const result2 = OrderProducts({
      orderBy: orderBy2,
      products
    })

    expect(result2).toEqual([
      {
        id: 2,
        name: "Produto 2",
        price: 10,
        quantity: 10,
        total_price: 100,
        user_id: 'test-id',
      },
      {
        id: 1,
        name: "Produto 1",
        price: 20,
        quantity: 20,
        total_price: 100,
        user_id: 'test-id',
      },
    ])
  })
})