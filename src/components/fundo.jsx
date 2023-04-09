function Fundo() {

    setTimeout(function () {

        const bg = document.getElementById('bg')
        const nuvem = document.getElementById('nuvem')
        const text = document.getElementById('text')

        const htmlImg = document.getElementById('html-img')
        const cssImg = document.getElementById('css-img')
        const javascriptImg = document.getElementById('javascript-img')
        const bootstrapImg = document.getElementById('bootstrap-img')
        const reactImg = document.getElementById('react-img')
        const mysqlImg = document.getElementById('mysql-img')
        const nodeImg = document.getElementById('node-img')

        const euImg = document.getElementById('eu-img')

        window.addEventListener('scroll', function () {
            let value = window.scrollY

            bg.style.top = value * 0.5 + 'px'
            nuvem.style.top = -value * 0.15 + 'px'
            // text.style.top = value * 1 + 'px'

            htmlImg.style.left = -value * 0.1 + 43 + '%'
            cssImg.style.left = -value * 0.05 + 10 + '%'
            javascriptImg.style.top = value * 0.1 + 42 + '%'
            bootstrapImg.style.top = value * 0.15 + 57 + '%'
            reactImg.style.top = value * 0.12 + 52 + '%'
            mysqlImg.style.left = value * 0.12 + 75 + '%'
            nodeImg.style.left = value * 0.08 + 70 + '%'
        })

    }, 100);


    return (
        <header>
            <div class="botao_one">
                <label for="check">
                    <i class="fas fa-bars"></i>
                </label>
            </div>
            <img src="./bg.jpg" alt="" id="bg" />

            <img src="./html.png" alt="" id="html-img"/>
            <img src="./css.png" alt="" id="css-img"/>
            <img src="./javascript.png" alt="" id="javascript-img"/>
            <img src="./bootstrap.png" alt="" id="bootstrap-img"/>
            <img src="./react.png" alt="" id="react-img"/>
            <img src="./mysql.png" alt="" id="mysql-img"/>
            <img src="./node.png" alt="" id="node-img"/>

            <img src="./nuvem.png" alt="" id="nuvem" />

            <h2 id="text">José Antonio</h2>
            <h5 id="text2">Desenvolvedor web Full Stack</h5>
        </header>

    )
}

export default Fundo