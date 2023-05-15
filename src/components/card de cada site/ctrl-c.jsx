function Ctrlc() {

    return (
        <div id="projetoExtra" class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 fw-bold lh-1">Ctrl-c</h1>
                    <p class="lead">No mês seguinte a conclusão do curso decidi construir um site que orgazinaria meus templates que venho guardando ao longo de minha caminhada de aprendizado.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a href="https://ctrl-c-nine.vercel.app/" target="_blank"  class="btn btn-outline-secondary btn-lg px-4">Visualizar</a>
                        <a href="https://github.com/elguesabal/Ctrl-C" target="_blank"  class="btn btn-outline-secondary btn-lg px-4">GitHub</a>
                    </div>
                </div>

                <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <div id="carouselExampleIndicators11" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators11" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators11" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators11" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="ctrl-c.gif" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="formulario.gif" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="copiando.gif" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators11" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators11" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ctrlc