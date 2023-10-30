export type ApiResponse<T> = {
  sucesso: boolean,
  mensagem: string,
  data: T
}