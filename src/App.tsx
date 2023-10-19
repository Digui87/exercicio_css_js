import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Cabecalho from './components/Cabecalho'
import FormVagas from './components/FormVagas'
import Vaga from './components/Vaga'

import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Cabecalho />
      <Hero />
      <FormVagas {props}/>
      <Vaga {vaga}/>
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
