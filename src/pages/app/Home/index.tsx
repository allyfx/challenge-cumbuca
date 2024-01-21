import { useState, useEffect } from "react"
import { Keyboard, Alert } from "react-native"

import { useNavigation } from "../../../libs/Router"
import { useAuth } from "../../../contexts/Auth/hook"

import { Product } from "../../../data/models/Product"

import { validateFormData } from "./use-cases/validate-form-data"

import data from "../../../data"

import { ICreateProductFormData, IErrors } from "./dto"

import { Layout } from "./layout"

export default function Home() {
  const { navigate } = useNavigation()
  const { user } = useAuth()

  const [searchText, setSearchText] = useState('')
  const [createProductFormData, setCreateProductFormData] = useState<ICreateProductFormData>({})
  const [errors, setErrors] = useState<IErrors>()
  const [products, setProducts] = useState<Product[]>([])

  function changeCreateProductFormData(key: keyof ICreateProductFormData, value: any) {
    setCreateProductFormData({
      ...createProductFormData,
      [key]: value
    })
  }

  async function onSubmitCreateProduct() {
    const isFormDataValid = validateFormData({
      data: createProductFormData,
      setErrors
    })

    if (!isFormDataValid) return

    const response = await data.Product.create({
      userId: user?.id!,
      name: createProductFormData.name!,
      price: createProductFormData.price!,
      quantity: createProductFormData.quantity!
    })

    if (response.status === 201) {
      setCreateProductFormData({})

      Keyboard.dismiss()

      setProducts(response.data)
    }
  }

  async function onChangeProductQuantity(productId: number, type: "add" | "remove") {
    const response = await data.Product.changeProductQuantity({
      productId,
      type
    })

    if (response.status === 200) {
      setProducts(response.data)
    }
  }

  async function onDeleteProduct(productId: number) {
    Alert.alert("Deseja realmente excluir este produto?", "", [
      {
        text: "Sim",
        onPress: async () => {
          const response = await data.Product.remove(productId)

          if (response.status === 200) {
            setProducts(response.data)
          }
        }
      },
      {
        text: "Não"
      }
    ])
  }

  function navigateToConfig() {
    navigate("Config")
  }

  useEffect(() => {
    async function getProducts() {
      const response = await data.Product.getUserProducts(user?.id!)

      if (response.status === 200) {
        setProducts(response.data)
      }
    }

    getProducts()
  }, [])

  return (
    <Layout
      navigateToConfig={navigateToConfig}
      createProductFormData={createProductFormData}
      changeCreateProductFormData={changeCreateProductFormData}
      onSubmitCreateProduct={onSubmitCreateProduct}
      errors={errors}
      products={products}
      onDeleteProduct={onDeleteProduct}
      onChangeProductQuantity={onChangeProductQuantity}
    />
  )
}
