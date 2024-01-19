import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';

import Login from '../../app/auth/Login';

import data from '../../data';

describe('Login Page', () => {
  beforeAll(async () => {
    await data.Auth.login({
      cpf: '12345678909',
      password: '12345678'
    })
  })

  beforeEach(() => {
    render(<Login />)
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