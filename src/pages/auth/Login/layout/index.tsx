import { View, Text } from "react-native"

import { Input } from "../../../../components/Input"
import { Button } from "../../../../components/Button"

import { IErrors } from "../dto"

import generateStyles from "./styles"

interface IProps {
  onSubmit: () => Promise<void>
  password: string
  cpf: string
  changePassword: (password: string) => void
  changeCpf: (cpf: string) => void
  errors: IErrors
}

export function Layout({
  onSubmit,
  password,
  cpf,
  changePassword,
  changeCpf,
  errors
}: IProps) {
  const styles = generateStyles()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boas vindas!</Text>
      <Text style={styles.subtitle}>
        Insira os seus dados para acessar o app
      </Text>

      <Input
        placeholder="CPF"
        onChangeText={changeCpf}
        error={errors.cpf}
        value={cpf}
      />
      <Input
        placeholder="Senha"
        type="password"
        onChangeText={changePassword}
        error={errors.password}
        value={password}
      />

      <Button title="Entrar" onPress={onSubmit} />
    </View>
  )
}