import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";

// IMPORTE DAS PAGINAS
import PrimeiroPortfolio from './card de cada site/primeiro portfolio';
import CocoaSpell from './card de cada site/cocoalSpell';
import CifraDeCesar from './card de cada site/cifra de cesar';
import FrontEnders from "./card de cada site/FrontEnders";
import JsonServer from "./card de cada site/json server";
import EstoqueSaude from "./card de cada site/estoque saude+";
import BancoDeDados from "./card de cada site/banco de dados";
import Projeto4 from "./card de cada site/projeto4";

import ClinicaVitallis from './card de cada site/Clinica Vitallis';
// IMPORTE DAS PAGINAS


function SlideSwiper() {

    return (
        <div id="resilia" className="slideSwiper">
            <Swiper grabCursor={true} effect={"creative"} creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            }} modules={[EffectCreative]} className="mySwiper">

                <SwiperSlide>
                    <div className="container-grid-intro">
                        <div class="box-intro">
                            <h1>Desenvolver web Full Stack</h1>
                            <h6>Arraste para o lado</h6>
                        </div>
                        
                        <div class="box-intro">
                            <p>Em setembro de 2022 comecei minha jornada no meu primeiro curso de programador através do projeto Programadores Cariocas em parceria com Resilia e o Senac. Neste curso com duração de 6 meses pude começar do zero e terminar minha caminhada com conhecimento de desenvolvedor web full stack.</p>
                        </div>
                        
                        <div className="box-intro">
                            <img src="senac.png" alt="" id="senac"/>
                            <img src="programadores cariocas.png" alt="" id="programadoresCariocas"/>
                            <img src="resilia.png" alt="" id="resilia"/>
                        </div>
                    </div>
                    
                </SwiperSlide>

                <SwiperSlide>
                    <PrimeiroPortfolio />
                </SwiperSlide>

                <SwiperSlide>
                    <CocoaSpell />
                </SwiperSlide>

                <SwiperSlide>
                    <CifraDeCesar />
                </SwiperSlide>

                <SwiperSlide>
                    <FrontEnders />
                </SwiperSlide>

                <SwiperSlide>
                    <JsonServer />
                </SwiperSlide>

                <SwiperSlide>
                    <EstoqueSaude />
                </SwiperSlide>

                <SwiperSlide>
                    <BancoDeDados />
                </SwiperSlide>

                <SwiperSlide>
                    <Projeto4 />
                </SwiperSlide>

                <SwiperSlide>
                    <ClinicaVitallis />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default SlideSwiper