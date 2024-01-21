import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { LogBox } from "react-native"
import { StatusBar } from 'expo-status-bar'

import { Routes } from './src/libs/Router'

import AuthProvider from './src/contexts/Auth'

LogBox.ignoreLogs(['Require cycle:'])

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <StatusBar style="auto" />
        
        <Routes />
      </AuthProvider>
    </GestureHandlerRootView>
  )
}
