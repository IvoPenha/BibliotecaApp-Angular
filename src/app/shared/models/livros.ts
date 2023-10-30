export type Livro = {
  id: number
  titulo: string
  autor: string
  ano: number
  disponibilidade: boolean
}

export type LivroPost = Omit<Livro, 'id' | 'disponibilidade'>

export type SearchParams = {
  titulo?: string;
  autor?: string;
  ano?: string;
}
