import { TextInput, View, Text } from "react-native"

import { IInputProps } from ".."

import { useTheme } from "../../../contexts/Theme/hook"

import generateStyles from "./styles"

interface IProps extends IInputProps {
  showPassword: boolean
  toggleShowPassword: () => void
}

export function Layout({
  showPassword,
  toggleShowPassword,
  error,
  type = "text",
  ...props
}: IProps) {
  const styles = generateStyles()
  const { theme } = useTheme()

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <TextInput
          style={styles.input}
          secureTextEntry={type === "password" && !showPassword}
          placeholderTextColor={theme.black}
          {...props}
        />
        {type === "password" && (
          <Text style={styles.passwordText} onPress={toggleShowPassword}>
            {showPassword ? "hide" : "show"}
          </Text>
        )}
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}