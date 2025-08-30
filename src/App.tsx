import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

// import './global.css'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </Container>
    </>
  )
}

export default App
