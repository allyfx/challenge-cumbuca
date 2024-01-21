import { View, Text, TouchableOpacity } from "react-native"

import Feather from "@expo/vector-icons/Feather"

import { Product } from "../../../../../../data/models/Product"

import Masks from "../../../../../../helpers/Masks"

import styles from "./styles"

interface IProps {
  product: Product
  onChangeQuantity: (productId: number, type: "add" | "remove") => void
  onDelete: (productId: number) => void
}

export function ProductItem({ product, onChangeQuantity, onDelete }: IProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Nome: {product.name}</Text>
        <Text>Preço p/ unidade: {Masks.Currency(product.price)}</Text>
        <Text>Quantidade: {product.quantity}</Text>
        <Text>Preço total: {Masks.Currency(product.total_price)}</Text>
      </View>

      <View style={styles.actionsWrapper}>
        <View style={styles.actions}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => onChangeQuantity(product.id, "remove")}>
            <Feather name="minus-square" size={28} color="black" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={() => onChangeQuantity(product.id, "add")}>
            <Feather name="plus-square" size={28} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(product.id)}>
          <Feather name="trash-2" size={28} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  )
}