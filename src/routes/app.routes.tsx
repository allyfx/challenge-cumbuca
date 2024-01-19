import { View } from "react-native"

import { IRoute } from "../libs/Router/dtos/router.dto"

export default [
  { path: "Home", component: <View /> },
  { path: "Profile", component: <View /> },
] as IRoute[]