import { SimpleRouter } from "./implementations/SimpleRouter"
import { useSimpleRouter } from "./implementations/SimpleRouter/hook"

import authRoutes from "../../routes/auth.routes"
import appRoutes from "../../routes/app.routes"

export const useNavigation = useSimpleRouter

export function Routes() {
  return SimpleRouter({ routes: [
    ...authRoutes,
    ...appRoutes
  ] })
}