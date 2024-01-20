import { View } from "react-native"

import Home from "../pages/app/Home"

import { ProtectedRoute } from "../libs/Router/components/ProtectedRoute"

import { IRoute } from "../libs/Router/dtos/router.dto"

export default [
  { path: "Home", component: <Home /> },
  { path: "Profile", component: <View /> },
].map((route) => ({
  ...route,
  component: <ProtectedRoute>{route.component}</ProtectedRoute>
})) as IRoute[]