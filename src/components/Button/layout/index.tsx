import { TouchableOpacity, Text } from "react-native"

import { IButtonProps } from ".."

import generateStyles from "./styles"

export function Layout({ ...props }: IButtonProps) {
  const styles = generateStyles()

  return (
    <TouchableOpacity style={styles.button} {...props} activeOpacity={0.8}>
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}