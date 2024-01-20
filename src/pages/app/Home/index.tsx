import { useNavigation } from "../../../libs/Router"

import { Layout } from "./layout"

export default function Home() {
  const { navigate } = useNavigation()

  function navigateToConfig() {
    navigate("Config")
  }

  return <Layout navigateToConfig={navigateToConfig} />
}
