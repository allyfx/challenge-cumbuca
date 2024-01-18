import { TouchableOpacityProps } from "react-native"

import { Layout } from "./layout"

export interface IButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ ...props }: IButtonProps) {
  return <Layout {...props} />
}