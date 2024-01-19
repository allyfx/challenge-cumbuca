import { useContext } from "react"

import { routerContext } from "."

export function useRouter() {
  const router = useContext(routerContext)
  return router
}