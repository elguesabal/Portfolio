function Perfil() {

    return (
        <div>
            <div class="row featurette card-perfil" id="card-perfil">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading fw-normal lh-1 tituloPerfil">Abaixo um pouco das minhas habilidades.</h2>
                    <hr />
                    <div class="divTable">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col" colspan="3">Habilidades</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HTML5</td>
                                    <td>CSS3</td>
                                    <td>JavaScript</td>
                                </tr>
                                <tr>
                                    <td>React</td>
                                    <td>Node.js</td>
                                    <td>MySQL</td>
                                </tr>
                                <tr>
                                    <td>MongoDB</td>
                                    <td>C</td>
                                    <td>GitHub</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div class="col-md-5 order-md-1">
                    <div class="container marketing">
                        <div class="row">
                            <div class="col-lg-12 d-flex align-items-center flex-column">
                                <img class="bd-placeholder-img rounded-circle " width="140" height="140" src="https://media.licdn.com/dms/image/D4D03AQE0ANrEe4uO7w/profile-displayphoto-shrink_400_400/0/1665860003192?e=1701302400&v=beta&t=0mFebDJulviSuhbTtPSILKtrM6ZCSqjug12fhdcgN8M" alt="" />
                                <h2 class="fw-normal nomePerfil">José</h2>
                                <p>Desenvolvedor web Full Stack</p>
                                <a class="btn btn-lg btn-outline-light" href="https://www.canva.com/design/DAFTzR3VmGY/qLmFQigCW6Y8hRZ8Ly7gew/view?utm_content=DAFTzR3VmGY&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel" target="_blank">Currículo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Perfil