import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css'
import './index.css'
import './style/cabecalho.css'
import './style/fundo.css'
import './style/swiper.css'
import './style/blocos grid.css'
import './style/rodape.css'
import './style/badminton.css'
import './style/mensagem.css'
import './style/perfil.css'
import './style/telaLoad.css'



import PaginaInicial from './paginas/pagina inicial'
import PaginaResilia from './paginas/pagina resilia'


// TESTES
import Cabecalho from './components/cabecalho'
import SlideSwiper from './components/slideSwiper'
import Fundo from './components/fundo'
import Rodape from './components/rodape'
// TESTES


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/curso" element={<PaginaResilia />} />


        <Route path="/teste" element={<Fundo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
