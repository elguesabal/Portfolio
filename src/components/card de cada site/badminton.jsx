function Badminton() {

    return (
        <div id="projetoExtra" class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 fw-bold lh-1">Projeto Badminton</h1>
                    <p class="lead">Logo no meu segundo mês do curso por, iniciativa própria, adaptei um treino de badminto (esporte que pratico). Dois meses após criei uma nova branch, chamada "react" e repostei com algumas novas melhorias.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a href="https://badbons.vercel.app/" target="_blank"  class="btn btn-outline-secondary btn-lg px-4">Visualizar</a>
                        <a href="https://github.com/elguesabal/Badminton" target="_blank"  class="btn btn-outline-secondary btn-lg px-4">GitHub</a>
                    </div>
                </div>

                <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <div id="carouselExampleIndicators10" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators10" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators10" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="badminton1.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="badminton2.jpg" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators10" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators10" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Badminton