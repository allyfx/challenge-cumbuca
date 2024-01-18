import { TouchableOpacity, Text } from "react-native"

import { IButtonProps } from ".."

import styles from "./styles"

export function Layout({ ...props }: IButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...props} activeOpacity={0.8}>
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}