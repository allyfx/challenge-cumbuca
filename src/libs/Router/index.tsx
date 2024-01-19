import { SimpleRouter } from "./implementations/SimpleRouter"

import authRoutes from "../../routes/auth.routes"

export function Routes() {
  return SimpleRouter({ routes: authRoutes })
}