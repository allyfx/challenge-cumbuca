import { TouchableOpacity, View } from "react-native"

import Feather from '@expo/vector-icons/Feather'

import { Input } from "../../../../components/Input"

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
    </View>
  )
}