import { View } from "react-native"

import { ProtectedRoute } from "../libs/Router/components/ProtectedRoute"

import { IRoute } from "../libs/Router/dtos/router.dto"

export default [
  { path: "Home", component: <View /> },
  { path: "Profile", component: <View /> },
].map((route) => ({
  ...route,
  component: <ProtectedRoute>{route.component}</ProtectedRoute>
})) as IRoute[]