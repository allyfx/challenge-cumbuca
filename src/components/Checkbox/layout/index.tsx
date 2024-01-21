import { useTheme } from '../../../contexts/Theme/hook'

import Feather from '@expo/vector-icons/Feather'

interface IProps {
  selected: boolean
  onChange: () => void
}

export function Layout({ selected, onChange }: IProps) {
  const { theme } = useTheme()

  return (
    <Feather
      name={selected ? "check-square" : "square"}
      size={24}
      color={theme.primary}
      onPress={onChange}
    />
  )
}