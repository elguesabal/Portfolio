function CocoaSpell() {

    return(
        <div class="container-grid">

            <div class="box">
                <div class="content">
                    <h1>Módulo 1</h1>
                    <h6>Arraste para o lado</h6>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <p>Ao final do primeiro mês esse foi o resultado do primeiro trabalho em grupo realizado. Um site simples com algumas pequenas e simples interações JavaScript.</p>
                </div>
            </div>

            <div class="box">
                <div class="slide-content">
                    <div id="carouselExampleIndicators2" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="./cocoa spell1.png" class="d-block w-100" alt="Imagem do projeto"/>
                            </div>
                            <div class="carousel-item">
                            <img src="./cocoa spell2.png" class="d-block w-100" alt="Imagem do projeto"/>
                            </div>
                            <div class="carousel-item">
                            <img src="./cocoa spell3.png" class="d-block w-100" alt="Imagem do projeto"/>
                            </div>
                            <div class="carousel-item">
                            <img src="./cocoa spell4.png" class="d-block w-100" alt="Imagem do projeto"/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <p>Tecnologias: HTML5, CSS3 e JavaScript</p>
                </div>
            </div>

            <div class="box botao-link">
                <div class="d-grid gap-2 col-8">
                    <a href="https://elguesabal.github.io/Trabalho-em-grupo/" target="_blank">
                    <button type="button" class="btn btn-outline-light col-12">GitHub</button>
                    </a>

                    <a href="https://github.com/elguesabal/Trabalho-em-grupo" target="_blank">
                    <button type="button" class="btn btn-outline-light col-12">Site</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default CocoaSpell