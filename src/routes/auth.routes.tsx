import Login from "../app/auth/Login"

import { IRoute } from "../libs/Router/dtos/router.dto"

export default [
  { path: "Login", component: <Login /> },
] as IRoute[]