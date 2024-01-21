import { TouchableOpacity, Text } from "react-native"

import { ISelectedButtonProps } from ".."

import styles from "./styles"

export function Layout({ selected, ...props }: ISelectedButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        selected && styles.selectedButton
      ]}
      {...props}
      activeOpacity={0.8}
    >
      <Text style={selected && styles.selectedButtonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}