import { TouchableOpacity, View, Text, FlatList } from "react-native"

import Feather from '@expo/vector-icons/Feather'

import { Input } from "../../../../components/Input"
import { Button } from "../../../../components/Button"

import styles from "./styles"

interface IProps {
  navigateToConfig: () => void
}

export function Layout({ navigateToConfig }: IProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input placeholder="Pesquisa..." />

        <TouchableOpacity activeOpacity={0.8} onPress={navigateToConfig}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Novo produto</Text>

      <View style={styles.forms}>
        <Input placeholder="Nome do produto" />
        <View style={styles.formsRow}>
          <Input placeholder="Preço p/ unidade" keyboardType="numeric" />
          <Input placeholder="Quantidade" keyboardType="numeric" />
        </View>
        <Button title="Adicionar" />
      </View>
    </View>
  )
}