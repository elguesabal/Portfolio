import Cabecalho from "../components/cabecalho"
import SlideSwiper from '../components/slideSwiper'
import Fundo from "../components/fundo"
import Rodape from "../components/rodape"
import Badminton from "../components/card de cada site/badminton"
import Mensagem from "../components/mensagem"
import Perfil from "../components/perfil"
import TelaLoad from "../components/telaLoad"

function PaginaInicial() {

    return(
        <div>
            <TelaLoad />
            <Fundo />
            <Cabecalho />
            <Perfil />
            <SlideSwiper />
            <Badminton />
            <Mensagem /><a href="/mensagemenviada">testandoo</a>
            <Rodape />

        </div>
    )
}

export default PaginaInicial
