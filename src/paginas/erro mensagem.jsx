function Erro() {

    return (
        <div class="telaMensagem">
            <div className="painelMensagem">
                <div>
                    <div class="d-flex justify-content-center">
                        <h2>Ocorreu um erro... Verifique se o email foi digitado corretamente!</h2>
                    </div>
                    <br /><br />
                    <div class="d-flex justify-content-center">
                        <a href="/" class="w-100 btn btn-lg btn-outline-light">Voltar para página inicial</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Erro