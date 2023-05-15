import Cabecalho from "../components/cabecalho"
import SlideSwiper from '../components/slideSwiper'
import Fundo from "../components/fundo"
import Rodape from "../components/rodape"
import Badminton from "../components/card de cada site/badminton"
import Ctrlc from "../components/card de cada site/ctrl-c"
import Mensagem from "../components/mensagem"
import Perfil from "../components/perfil"
import TelaLoad from "../components/telaLoad"
import BackToUp from "../components/back to up"

function PaginaInicial() {

    return(
        <div>
            <TelaLoad />
            <BackToUp />
            <Fundo />
            <Cabecalho />
            <Perfil />
            <SlideSwiper />
            <Badminton />
            <Ctrlc />
            <Mensagem />
            <Rodape />
        </div>
    )
}

export default PaginaInicial