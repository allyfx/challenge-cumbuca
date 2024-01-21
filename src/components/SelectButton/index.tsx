import { TouchableOpacityProps } from "react-native"

import { Layout } from "./layout"

export interface ISelectedButtonProps extends TouchableOpacityProps {
  selected?: boolean
  title: string
}

export function SelectButton({ selected = false, ...props }: ISelectedButtonProps) {
  return <Layout selected={selected} {...props} />
}