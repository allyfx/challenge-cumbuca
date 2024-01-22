import { render, screen, fireEvent, waitFor } from '@testing-library/react-native'

import ThemeProvider from '../../contexts/Theme'
import AuthProvider from '../../contexts/Auth'

import Home from '../../pages/app/Home'

import data from '../../data'

import { useNavigation } from '../../libs/Router'
jest.mock('../../libs/Router', () => ({ useNavigation: () => {
  return {
    navigate: jest.fn()
  }
}}))

describe('Home Page', () => {
  beforeAll(async () => {
    await data.Auth.login({
      cpf: '12345678909',
      password: '12345678'
    })
  })

  beforeEach(async () => {
    await waitFor(() => render(
      <ThemeProvider>
        <AuthProvider>
          <Home />
        </AuthProvider>
      </ThemeProvider>
    ))
  })

  it('should add a new product and should remove product', async () => {
    const nameInput = screen.getByPlaceholderText('Nome do produto')
    const priceInput = screen.getByPlaceholderText('Preço p/ unidade')
    const quantityInput = screen.getByPlaceholderText('Quantidade')

    fireEvent.changeText(nameInput, 'Produto de Teste')
    fireEvent.changeText(priceInput, '10.00')
    fireEvent.changeText(quantityInput, '10')

    const button = screen.getByText('Adicionar')

    fireEvent.press(button)

    await waitFor(() => expect(screen.queryByText('Produto de Teste')).toBeDefined())
  })

  it('should not add a product with invalid form', async () => {
    const nameInput = screen.getByPlaceholderText('Nome do produto')
    const priceInput = screen.getByPlaceholderText('Preço p/ unidade')
    const quantityInput = screen.getByPlaceholderText('Quantidade')

    fireEvent.changeText(nameInput, 'Produto de Teste')
    fireEvent.changeText(priceInput, '10.00')
    fireEvent.changeText(quantityInput, '0')

    const button = screen.getByText('Adicionar')

    fireEvent.press(button)

    await waitFor(() => {
      expect(screen.queryByText('Produto de Teste')).toBeNull()
      expect(screen.queryByText('Preço deve ser maior que 0')).toBeDefined()
    })
  })
})