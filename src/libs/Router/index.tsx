import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { SimpleRouter } from "./implementations/SimpleRouter"
import { useSimpleRouter } from "./implementations/SimpleRouter/hook"

import authRoutes from "../../routes/auth.routes"
import appRoutes from "../../routes/app.routes"

import { useTheme } from '../../contexts/Theme/hook'

export const useNavigation = useSimpleRouter

export function Routes() {
  const { usingDarkTheme } = useTheme()

  return (
    <GestureHandlerRootView style={{
      flex: 1,
      backgroundColor: !usingDarkTheme ? "#fff" : "#151515"
    }}>
      <StatusBar style={!usingDarkTheme ? "dark" : "light"} />

      {SimpleRouter({ routes: [
        ...authRoutes,
        ...appRoutes
      ]})}
    </GestureHandlerRootView>
  )
}