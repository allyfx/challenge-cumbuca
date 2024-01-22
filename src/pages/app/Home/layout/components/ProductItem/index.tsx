import { View, Text, TouchableOpacity } from "react-native"

import { useTheme } from "../../../../../../contexts/Theme/hook"

import Feather from "@expo/vector-icons/Feather"

import { Product } from "../../../../../../data/models/Product"

import Masks from "../../../../../../helpers/Masks"

import generateStyles from "./styles"

interface IProps {
  product: Product
  onChangeQuantity: (productId: number, type: "add" | "remove") => void
  onDelete: (productId: number) => void
  onLongPress: () => void
}

export function ProductItem({ product, onChangeQuantity, onDelete, onLongPress }: IProps) {
  const styles = generateStyles()
  const { theme } = useTheme()

  return (
    <TouchableOpacity style={styles.container} onLongPress={onLongPress} activeOpacity={0.8}>
      <View>
        <Text style={styles.text}>Nome: {product.name}</Text>
        <Text style={styles.text}>Preço p/ unidade: {Masks.Currency(product.price)}</Text>
        <Text style={styles.text}>Quantidade: {product.quantity}</Text>
        <Text style={styles.text}>Preço total: {Masks.Currency(product.total_price)}</Text>
      </View>

      <View style={styles.actionsWrapper}>
        <View style={styles.actions}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => onChangeQuantity(product.id, "remove")}>
            <Feather name="minus-square" size={28} color={theme.black} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={() => onChangeQuantity(product.id, "add")}>
            <Feather name="plus-square" size={28} color={theme.black} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity testID="remove-product" activeOpacity={0.8} onPress={() => onDelete(product.id)}>
          <Feather name="trash-2" size={28} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}