// CODIGOS DE INSTALACAO
// npm i express
// npm install --save-dev nodemon
// npm i nodemailer dotenv
// npm install --save body-parser


const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

// npm install --save-dev sucrase****
// import mensagemCliente from './mensagemCliente' // teste
// console.log(mensagemCliente)

const app = express()
require('dotenv').config()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


                    app.get('/teste', (req, res) => res.send('so pra testar'))

app.get('/', (req, res) => res.send('deu certo <a href="/teste">clica aki pra redirecionar</a>'))

app.post('/enviarEmail', (req, res) => {

    const email = req.body.email
    const mensagem = req.body.mensagem

    const transport = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.SENHA
        }
    })

    transport.sendMail({
        from: `enviado de <${process.env.EMAIL}>`,
        to: 'joseelguesabal@gmail.com',
        subject: 'Nova mensagem da caixa do portfolio',
        html: `<h1>Email de contato: <br/> ${email}</h1> <p>${mensagem}</p>`,
        text: `Email de contato: ${email} ${mensagem}`
    })
    .then(() => console.log('email enviado'))
    .catch((err) => console.log('deu esse erro ai', err))


    transport.sendMail({
        from: `enviado de <${process.env.EMAIL}>`,
        to: email,
        subject: 'Obrigado por me enviar uma mensagem!',
        html: `<p>Agradeço o contato e em breve estarei respondendo!</p>`,
        text: `Agradeço o contato e em breve estarei respondendo!`
    })
    .then(() => console.log('email respondido'))
    .catch((err) => console.log('deu esse erro ai', err))


    res.send('email enviado')
})



const port = 3000
app.listen(process.env.PORT || port, () => console.log(`servidor rodando na porta ${port}`), console.log(`acesse o link http://localhost:${port}`))