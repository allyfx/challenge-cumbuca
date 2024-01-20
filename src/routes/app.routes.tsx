import { View } from "react-native"

import Home from "../pages/app/Home"

import { IRoute } from "../libs/Router/dtos/router.dto"

export default [
  { path: "Home", component: <Home />, protected: true },
  { path: "Profile", component: <View />, protected: true },
] as IRoute[]