import { TouchableOpacity, View, Text } from "react-native"

import { useTheme } from "../../../../contexts/Theme/hook"

import { Checkbox } from "../../../../components/Checkbox"
import { Button } from "../../../../components/Button"

import Feather from '@expo/vector-icons/Feather'

import generateStyles from "./styles"

export interface ILayoutProps {
  goBack: () => void
  logOut: () => void
  useBiometry: boolean
  onChangeUseBiometry: () => void
  usingDarkTheme: boolean
  onChangeUseDarkTheme: () => void
}

export function Layout({ goBack, useBiometry, onChangeUseBiometry, logOut, onChangeUseDarkTheme, usingDarkTheme }: ILayoutProps) {
  const styles = generateStyles()
  const { theme } = useTheme()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Feather name="chevron-left" size={24} color={theme.black} />

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

        <View style={styles.biometryCheckbox}>
          <Checkbox selected={usingDarkTheme} onChange={onChangeUseDarkTheme} />
          <Text style={styles.biometryText}>Usar tema escuro?</Text>
        </View>

        <Button title="Sair" onPress={logOut} />
      </View>
    </View>
  )
}