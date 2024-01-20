import { StatusBar } from 'expo-status-bar'

import { Routes } from './src/libs/Router'

import AuthProvider from './src/contexts/Auth'

export default function App() {
  return (
    <AuthProvider>
      <Routes />
      
      <StatusBar style="auto" />
    </AuthProvider>
  )
}
