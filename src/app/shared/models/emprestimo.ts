export type Emprestimo = {
  id: number
  livroId: number
  usuarioId: number
  dataEmprestimo: Date | string
  dataDevolucao: Date | string
}