import { FormEvent, useState } from 'react'
import { Form } from './style'
import { BotaoPesquisar } from './style'
import { Campo } from './style'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <form className={Form.form} onSubmit={aoEnviarForm}>
      <input
        className={Campo.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button className={BotaoPesquisar.btnPesquisar} type="submit">
        Pesquisar
      </button>
    </form>
  )
}
export default FormVagas
