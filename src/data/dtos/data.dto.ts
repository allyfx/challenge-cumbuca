export interface ILoginData {
  cpf: string
  password: string
}

export interface IResponse {
  error?: string
  status: number
  data?: any
}

export interface IDataDto {
  Auth: {
    login: (data: ILoginData) => Promise<IResponse>
  }
}