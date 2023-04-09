function JsonServer() {

    return (
        <div class="container-grid">

            <div class="box">
                <div class="content">
                    <h1>Módulo 3</h1>
                    <h6>Arraste para o lado</h6>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <p>Este mês foi um pouco diferente. Estudei um pouco de JSON, aprendi sobre consumo de API, assim como subir uma aplicação no site do render.com. Neste projeto foi proposto a criação de um servidor com informações em JSON e colocá-lo online.</p>
                </div>
            </div>

            <div class="box">
                <div class="slide-content">
                    <div id="carouselExampleIndicators5" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./json server1.png" class="d-block w-100" alt="Imagem do projeto"/>
                            </div>
                            <div class="carousel-item">
                                <img src="./json server2.png" class="d-block w-100" alt="Imagem do projeto"/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <p>Tecnologias: Node.js e JSON</p>
                </div>
            </div>

            <div class="box botao-link">
                <div class="d-grid gap-2 col-8">
                    <a href="https://github.com/elguesabal/json-server" target="_blank">
                    <button type="button" class="btn btn-outline-light col-12">GitHub</button>
                    </a>

                    <a href="https://server-json-modulo3.onrender.com/" target="_blank">
                    <button type="button" class="btn btn-outline-light col-12">Site</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default JsonServer