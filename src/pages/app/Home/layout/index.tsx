import { TouchableOpacity, View, ScrollView, Text, FlatList } from "react-native"

import Feather from '@expo/vector-icons/Feather'

import { Input } from "../../../../components/Input"
import { Button } from "../../../../components/Button"
import { SelectButton } from "../../../../components/SelectButton"
import { ProductItem } from "./components/ProductItem"

import { OrderBy } from "../use-cases/order-products"

import { Product } from "../../../../data/models/Product"

import { ICreateProductFormData, IErrors } from "../dto"

import styles from "./styles"

interface IProps {
  navigateToConfig: () => void
  createProductFormData: ICreateProductFormData
  changeCreateProductFormData: (key: keyof ICreateProductFormData, value: any) => void
  onSubmitCreateProduct: () => Promise<void>
  errors?: IErrors
  products: Product[]
  onChangeProductQuantity: (productId: number, type: "add" | "remove") => void
  onDeleteProduct: (productId: number) => void
  searchText: string
  setSearchText: (text: string) => void
  orderBy?: OrderBy
  setOrderBy: (value: OrderBy) => void
}

export function Layout({
  navigateToConfig,
  changeCreateProductFormData,
  createProductFormData,
  onSubmitCreateProduct,
  products,
  errors,
  onChangeProductQuantity,
  onDeleteProduct,
  searchText,
  setSearchText,
  setOrderBy,
  orderBy
}: IProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input
          placeholder="Pesquisa..."
          value={searchText}
          onChangeText={setSearchText}
        />

        <TouchableOpacity activeOpacity={0.8} onPress={navigateToConfig}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Novo produto</Text>

      <View style={styles.forms}>
        <View style={styles.formsRow}>
          <Input
            placeholder="Nome do produto"
            value={createProductFormData.name}
            onChangeText={text => changeCreateProductFormData("name", text)}
            error={errors?.name}
          />
        </View>

        <View style={styles.formsRow}>
          <Input
            placeholder="Preço p/ unidade"
            keyboardType="numeric"
            value={String(createProductFormData.price ?? "")}
            onChangeText={text => changeCreateProductFormData("price", Number(text))}
            error={errors?.price}
          />
          <Input
            placeholder="Quantidade"
            keyboardType="numeric"
            value={String(createProductFormData.quantity ?? "")}
            onChangeText={text => changeCreateProductFormData("quantity", Number(text))}
            error={errors?.quantity}
          />
        </View>
        <Button title="Adicionar" onPress={onSubmitCreateProduct} />
      </View>

      <Text style={styles.title}>Produtos</Text>

      <Text style={styles.subtitle}>Ordenar por:</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.order}
      >
        <SelectButton
          title="Nome"
          selected={orderBy === "name"}
          onPress={() => setOrderBy("name")}
        />
        <SelectButton
          title="Preço"
          selected={orderBy === "price"}
          onPress={() => setOrderBy("price")}
        />
        <SelectButton
          title="Quantidade"
          selected={orderBy === "quantity"}
          onPress={() => setOrderBy("quantity")}
        />
        <SelectButton
          title="Preço Total"
          selected={orderBy === "total_price"}
          onPress={() => setOrderBy("total_price")}
        />
      </ScrollView>

      <FlatList
        contentContainerStyle={styles.productList}
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onChangeQuantity={onChangeProductQuantity}
            onDelete={onDeleteProduct}
          />
        )}
      />
    </View>
  )
}