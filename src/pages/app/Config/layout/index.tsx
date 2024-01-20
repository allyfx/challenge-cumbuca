import { TouchableOpacity, View, Text } from "react-native"

import { Checkbox } from "../../../../components/Checkbox"

import Feather from '@expo/vector-icons/Feather'

import styles from "./styles"
import { Button } from "../../../../components/Button"

export interface ILayoutProps {
  goBack: () => void
  logOut: () => void
  useBiometry: boolean
  onChangeUseBiometry: () => void
}

export function Layout({ goBack, useBiometry, onChangeUseBiometry, logOut }: ILayoutProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Feather name="chevron-left" size={24} color="black" />

          <Text style={styles.goBackText}>
            Voltar
          </Text>          
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.biometryCheckbox}>
          <Checkbox selected={useBiometry} onChange={onChangeUseBiometry} />
          <Text style={styles.biometryText}>Usar biometria para login.</Text>
        </View>

        <Button title="Sair" onPress={logOut} />
      </View>
    </View>
  )
}