import { useContext } from "react"

import { routerContext } from "."

export function useSimpleRouter() {
  const router = useContext(routerContext)
  return router
}