import { TouchableOpacity, View, ScrollView, Text } from "react-native"

import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist"

import { useTheme } from "../../../../contexts/Theme/hook"

import Feather from '@expo/vector-icons/Feather'

import { Input } from "../../../../components/Input"
import { Button } from "../../../../components/Button"
import { SelectButton } from "../../../../components/SelectButton"
import { ProductItem } from "./components/ProductItem"

import { OrderBy } from "../use-cases/order-products"

import { Product } from "../../../../data/models/Product"

import { ICreateProductFormData, IErrors } from "../dto"

import generateStyles from "./styles"

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
  setProducts: (products: Product[]) => void
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
  orderBy,
  setProducts
}: IProps) {
  const styles = generateStyles()
  const { theme } = useTheme()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input
          placeholder="Pesquisa..."
          value={searchText}
          onChangeText={setSearchText}
        />

        <TouchableOpacity activeOpacity={0.8} onPress={navigateToConfig}>
          <Feather name="menu" size={24} color={theme.black} />
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

      <DraggableFlatList
        containerStyle={{flex: 1}}
        contentContainerStyle={styles.productList}
        data={products}
        onDragEnd={({ data }) => setProducts(data)}
        keyExtractor={item => String(item.id)}
        showsHorizontalScrollIndicator
        renderItem={({ item, drag }) => (
          <ScaleDecorator activeScale={1.02}>
            <ProductItem
              product={item}
              onLongPress={drag}
              onChangeQuantity={onChangeProductQuantity}
              onDelete={onDeleteProduct}
            />
          </ScaleDecorator>
        )}
      />
    </View>
  )
}