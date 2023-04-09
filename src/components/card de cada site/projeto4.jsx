function Projeto4() {

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
                    <p>Neste trabalho foi desenvolvido os aprendizados de MySQL, cujo a finalidade era contruir um site buscando dados fornecidos de um banco de dados de 2018 da Steam.</p>
                </div>
            </div>

            <div class="box">
                <div class="slide-content">
                    <div id="carouselExampleIndicators8" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./projeto41.png" class="d-block w-100" alt="Imagem do projeto"/>
                            </div>
                            <div class="carousel-item">
                                <img src="./projeto42.png" class="d-block w-100" alt="Imagem do projeto"/>
                            </div>
                            <div class="carousel-item">
                                <img src="./projeto43.png" class="d-block w-100" alt="Imagem do projeto"/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <p>Tecnologias: HTML5, CSS3, Bootstrap e MySQL</p>
                </div>
            </div>

            <div class="box botao-link">
                <div class="d-grid gap-2 col-8">
                    <a href="https://github.com/elguesabal/ProjetoM4" target="_blank">
                    <button type="button" class="btn btn-outline-light col-12">GitHub</button>
                    </a>

                    <a href="https://man-noel.github.io/ProjetoM4/" target="_blank">
                    <button type="button" class="btn btn-outline-light col-12">Site</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Projeto4