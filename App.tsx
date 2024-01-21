import { LogBox } from "react-native"

import { Routes } from './src/libs/Router'

import AuthProvider from './src/contexts/Auth'
import ThemeProvider from './src/contexts/Theme';

LogBox.ignoreLogs(['Require cycle:'])

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}
