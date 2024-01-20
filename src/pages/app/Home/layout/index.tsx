import { SafeAreaView } from "react-native"

import { Button } from "../../../../components/Button"

interface IProps {
  logoutUser: () => Promise<void>
}

export function Layout({ logoutUser }: IProps) {
  return (
    <SafeAreaView>
      <Button title="LogOut" onPress={logoutUser} />
    </SafeAreaView>
  )
}