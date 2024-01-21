import { render, screen, fireEvent, waitFor, act } from '@testing-library/react-native'

import AuthProvider from '../../contexts/Auth'
import Login from '../../pages/auth/Login'

import data from '../../data'

import { useNavigation } from '../../libs/Router'
jest.mock('../../libs/Router', () => ({ useNavigation: () => {
  return {
    navigate: jest.fn()
  }
}}))

describe('Login Page', () => {
  beforeAll(async () => {
    await data.Auth.login({
      cpf: '12345678909',
      password: '12345678'
    })
  })

  beforeEach(async () => {
    await waitFor(() => render(<AuthProvider><Login /></AuthProvider>))
  })

  it('should login with success', async () => {
    const cpfInput = screen.getByPlaceholderText('CPF')
    const passwordInput = screen.getByPlaceholderText('Senha')

    fireEvent.changeText(cpfInput, '12345678909')
    fireEvent.changeText(passwordInput, '12345678')

    const button = screen.getByText('Entrar')

    fireEvent.press(button)
    
    await waitFor(() => expect(screen.queryByText('CPF ou Senha inválidos')).toBeDefined())
  })

  it('should not login with invalid form', async () => {
    const cpfInput = screen.getByPlaceholderText('CPF')
    const passwordInput = screen.getByPlaceholderText('Senha')

    fireEvent.changeText(cpfInput, '12345678909')
    fireEvent.changeText(passwordInput, 'Aa.1234567')

    const button = screen.getByText('Entrar')

    fireEvent.press(button)

    await waitFor(() => expect(screen.queryByText('CPF ou Senha inválidos')).toBeDefined())
  })

  it('should display errors for invalid form', async () => {
    const cpfInput = screen.getByPlaceholderText('CPF')
    const passwordInput = screen.getByPlaceholderText('Senha')

    fireEvent.changeText(cpfInput, '12345678910')
    fireEvent.changeText(passwordInput, '12345')

    const button = screen.getByText('Entrar')

    fireEvent.press(button)

    await waitFor(() => expect(screen.queryByText('CPF Inválido')).toBeDefined())
    await waitFor(() => expect(screen.queryByText('Senha Inválida')).toBeDefined())
  })
})