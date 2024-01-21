import { TouchableOpacity, Text } from "react-native"

import { ISelectedButtonProps } from ".."

import generateStyles from "./styles"

export function Layout({ selected, ...props }: ISelectedButtonProps) {
  const styles = generateStyles()

  return (
    <TouchableOpacity
      style={[
        styles.button,
        selected && styles.selectedButton
      ]}
      {...props}
      activeOpacity={0.8}
    >
      <Text style={[
        styles.buttonText,
        selected && styles.selectedButtonText
      ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}