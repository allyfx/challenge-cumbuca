import { View } from "react-native"

import Home from "../pages/app/Home"
import Config from "../pages/app/Config"

import { IRoute } from "../libs/Router/dtos/router.dto"

export default [
  { path: "Home", component: <Home />, protected: true },
  { path: "Config", component: <Config />, protected: true },
] as IRoute[]