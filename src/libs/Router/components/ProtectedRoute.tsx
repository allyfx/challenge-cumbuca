import { ReactNode, useEffect } from "react"

import { useAuth } from "../../../contexts/Auth/hook"

interface Props {
  children: ReactNode
  navigate?: (route: string) => void
}

export function ProtectedRoute({ children, navigate }: Props) {
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      navigate && navigate("Login")
    }
  }, [user])

  return children
}
