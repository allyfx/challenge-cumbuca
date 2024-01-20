import { View } from "react-native"

import Feather from '@expo/vector-icons/Feather'

interface IProps {
  selected: boolean
  onChange: () => void
}

export function Layout({ selected, onChange }: IProps) {
  return (
    <Feather
      name={selected ? "check-square" : "square"}
      size={24}
      color="#FFD74F"
      onPress={onChange}
    />
  )
}