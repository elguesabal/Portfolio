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
import './style/mensagem enviada.css'
import './style/scroll.css'



import PaginaInicial from './paginas/pagina inicial'
import MensagemEnviada from './paginas/mensagem enviada'
import Erro from './paginas/erro mensagem'


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
        <Route path="/mensagemenviada" element={<MensagemEnviada />} />
        <Route path="/erro" element={<Erro />} />


        <Route path="/teste" element={<MensagemEnviada />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
