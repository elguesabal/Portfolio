function Perfil() {

    return (
        <div>
            <div class="row featurette card-perfil">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading fw-normal lh-1 tituloPerfil">Abaixo um pouco das minhas habilidades.</h2>
                    <hr />
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col" colspan="2">Habilidades</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HTML5</td>
                                <td>Bootstrap</td>
                                <td>Node.js</td>
                            </tr>
                            <tr>
                                <td>CSS3</td>
                                <td>React</td>
                                <td>Express</td>
                            </tr>
                            <tr>
                                <td>JavaScript</td>
                                <td>MySQL</td>
                                <td>GitHub</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-5 order-md-1">
                    <div class="container marketing">
                        <div class="row">
                            <div class="col-lg-12 d-flex align-items-center flex-column">
                                <img class="bd-placeholder-img rounded-circle " width="140" height="140" src="https://media.licdn.com/dms/image/D4D03AQE0ANrEe4uO7w/profile-displayphoto-shrink_200_200/0/1665860003192?e=1685577600&v=beta&t=tpW4Zae687TRYNVYc-QyixbwPN4ik8-C5x7ki6MgnUk" alt="" />
                                <h2 class="fw-normal nomePerfil">José</h2>
                                <p>Desenvolvedor web Full Stack</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Perfil