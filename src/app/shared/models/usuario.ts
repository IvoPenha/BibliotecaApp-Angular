export type Usuario = {
  id: number
  nome: string
  email: string
  telefone: string
}

export type UsuarioPost = Omit<Usuario, 'id'>