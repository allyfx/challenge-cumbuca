import data from "../../data"

describe('Auth Test - Storage', () => {
  it ('should create a new user if the cpf is not storaged', async () => {
    const response = await data.Auth.login({
      cpf: '432.351.600-27', // Generated with 4Devs
      password: 'Aa.1234567'
    })

    expect(response.status).toBe(200)
  })

  it ('should not create a new user if the cpf or password is invalid', async () => {
    const cpfInvalidResponse = await data.Auth.login({
      cpf: '12345678910',
      password: 'Aa.1234567'
    })

    expect(cpfInvalidResponse.status).toBe(400)

    const response = await data.Auth.login({
      cpf: '215.906.650-82', // Generated with 4Devs
      password: 'Aa'
    })

    expect(response.status).toBe(400)
  })

  it ('should login the user', async () => {
    const response = await data.Auth.login({
      cpf: '432.351.600-27', // Generated with 4Devs
      password: 'Aa.1234567'
    })

    expect(response.status).toBe(200)
  })

  it ('should not login the user if the password is incorrect', async () => {
    const response = await data.Auth.login({
      cpf: '432.351.600-27', // Generated with 4Devs
      password: 'Aa.12345'
    })

    expect(response.status).toBe(401)
  })

  it ('should not login if the cpf is invalid', async () => {
    const cpfInvalidResponse = await data.Auth.login({
      cpf: '12345678910',
      password: 'Aa.1234567'
    })

    expect(cpfInvalidResponse.status).toBe(400)
  })
})