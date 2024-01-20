import { useAuth } from "../../../contexts/Auth/hook"

import { Layout } from "./layout"

export default function Home() {
  const { logOut } = useAuth()

  return <Layout logoutUser={logOut} />
}
