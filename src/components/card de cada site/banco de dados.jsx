function BancoDeDados() {

    return(
        <div class="container-grid">

            <div class="box">
                <div class="content">
                    <h1>Módulo 4</h1>
                    <h6>Arraste para o lado</h6>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <p>No quarto mês entrei de cabeça no back-end estudando banco de dados relacional e proposto como trabalho a modelagem, criacão de database e tabelas.</p>
                </div>
            </div>

            <div class="box">
                <div class="slide-content">
                    <div id="carouselExampleIndicators7" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./banco de dados1.png" class="d-block w-100" alt="Imagem do projeto"/>
                            </div>
                            <div class="carousel-item">
                                <img src="./banco de dados2.png" class="d-block w-100" alt="Imagem do projeto"/>
                            </div>
                            <div class="carousel-item">
                                <img src="./banco de dados3.png" class="d-block w-100" alt="Imagem do projeto"/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <p>Tecnologias: MySQL</p>
                </div>
            </div>

            <div class="box botao-link">
                <div class="d-grid gap-2 col-8">
                    <a href="https://github.com/elguesabal/Trabalho-individual-modulo-4" target="_blank">
                    <button type="button" class="btn btn-outline-light col-12">GitHub</button>
                    </a>

                    <a href="_blank" target="_blank">
                    <button type="button" class="btn btn-outline-light col-12">Site</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default BancoDeDados