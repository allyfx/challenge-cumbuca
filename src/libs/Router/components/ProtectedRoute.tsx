import { ReactNode, useEffect } from "react"

import { useAuth } from "../../../contexts/Auth/hook"
import { useNavigation } from ".."

interface Props {
  children: ReactNode
}

export function ProtectedRoute({ children }: Props) {
  const { user } = useAuth()
  const { navigate } = useNavigation()

  useEffect(() => {
    if (!user) {
      navigate("Login")
    }
  }, [])

  return children
}
