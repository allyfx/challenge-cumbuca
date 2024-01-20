import { useState } from "react";
import { TextInputProps } from "react-native"

import { Layout } from "./layout"

export interface IInputProps extends TextInputProps {
  type?: "text" | "password"
  error?: string
  fullWidth?: boolean
}

export function Input({ ...props }: IInputProps)  {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  return <Layout
    showPassword={showPassword}
    toggleShowPassword={toggleShowPassword}
    {...props}
  />
}