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



app.get('/', (req, res) => res.send('deu certo <a href="/teste">clica aki pra redirecionar</a>'))
app.get('/teste', (req, res) => res.send('so pra testar'))


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


    const emailCliente = 
    `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

    <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
            <h2>Obrigado por mandar mensagem</h2>
            <p>Agradeço o contato e em breve estarei respondendo em breve! Também sinta-se à vontade para mandar
                mensagens em outras plataformas como LinkedIn, e-mail e WhatsApp.</p>
            <a href="https://jose-antonio.vercel.app/" class="btn btn-outline-light" target="_blank">Portfolio</a>
            <a href="https://www.canva.com/design/DAFTzR3VmGY/qLmFQigCW6Y8hRZ8Ly7gew/view?utm_content=DAFTzR3VmGY&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel"
                class="btn btn-outline-light" target="_blank">Currículo</a>
            <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-b14160240/" class="btn btn-outline-light"
                target="_blank">LinkedIn</a>
            <a href="https://wa.me/qr/NO4ELMDAGM2BI1" class="btn btn-outline-light" target="_blank">WhatsApp</a>
        </div>
    </div>
    `

    const mensagens = [
        {
            from: `enviado de <${process.env.EMAIL}>`,
            to: 'joseelguesabal@gmail.com',
            subject: 'Nova mensagem da caixa do portfolio',
            html: `<h1>Email de contato: <br/> ${email}</h1> <p>${mensagem}</p>`,
            text: `Email de contato: ${email} ${mensagem}`
        },
        {
            from: `enviado de <${process.env.EMAIL}>`,
            to: email,
            subject: 'Obrigado por me enviar uma mensagem!',
            html: emailCliente,
            text: `Agradeço o contato e em breve estarei respondendo!`
        }
    ]

    transport.sendMail(mensagens[0])
    .then((resposta) => {
        transport.sendMail(mensagens[1])
        .then((resposta) => res.redirect(`https://jose-antonio.vercel.app/mensagemenviada`))
        .catch((erro) => res.redirect(`https://jose-antonio.vercel.app/erro`))  
    })
    .catch((erro) => res.send(`ocorreu um erro: 1`))
    


    // transport.sendMail({
    //     from: `enviado de <${process.env.EMAIL}>`,
    //     to: 'joseelguesabal@gmail.com',
    //     subject: 'Nova mensagem da caixa do portfolio',
    //     html: `<h1>Email de contato: <br/> ${email}</h1> <p>${mensagem}</p>`,
    //     text: `Email de contato: ${email} ${mensagem}`
    // })
    // .then((resposta) => res.send(`email enviado para joseelguesabal@gmail.com`))
    // .catch((erro) => res.send(`o email para joseelguesabal@gmail.com nao foi enviado <br/> ${erro}`))

    // transport.sendMail({
    //     from: `enviado de <${process.env.EMAIL}>`,
    //     to: email,
    //     subject: 'Obrigado por me enviar uma mensagem!',
    //     html: `<p>Agradeço o contato e em breve estarei respondendo em breve!</p>`,
    //     text: `Agradeço o contato e em breve estarei respondendo!`
    // })
    // .then((resposta) => res.send(`email enviado para ${email}`))
    // .catch((erro) => res.send(`o email para ${email} nao foi enviado`))    


    
    // const mensagens = [
    //     {
    //         from: `enviado de <${process.env.EMAIL}>`,
    //         to: 'joseelguesabal@gmail.com',
    //         subject: 'Nova mensagem da caixa do portfolio',
    //         html: `<h1>Email de contato: <br/> ${email}</h1> <p>${mensagem}</p>`,
    //         text: `Email de contato: ${email} ${mensagem}`
    //     },
    //     {
    //         from: `enviado de <${process.env.EMAIL}>`,
    //         to: email,
    //         subject: 'Obrigado por me enviar uma mensagem!',
    //         html: `<p>Agradeço o contato e em breve estarei respondendo em breve!</p>`,
    //         text: `Agradeço o contato e em breve estarei respondendo!`
    //     }
    // ]

    // for (let i = 0; i < mensagens.length; i++) {
    //     transport.sendMail(mensagens[i])
    //     .then((resposta) => console.log(`email ${i + 1} enviado`))
    //     .catch((erro) => res.send(`ouve um erro: ${i + 1}`))
    // }



    // function emailJose() {
    //     transport.sendMail({
    //         from: `enviado de <${process.env.EMAIL}>`,
    //         to: 'joseelguesabal@gmail.com',
    //         subject: 'Nova mensagem da caixa do portfolio',
    //         html: `<h1>Email de contato: <br/> ${email}</h1> <p>${mensagem}</p>`,
    //         text: `Email de contato: ${email} ${mensagem}`
    //     })
    //     .then((resposta) => console.log('email 1 enviado'))
    //     .catch((erro) => console.log('email 1 nao foi enviado'))
        
    // }

    // function emailCliente() {
    //     transport.sendMail({
    //         from: `enviado de <${process.env.EMAIL}>`,
    //         to: email,
    //         subject: 'Obrigado por me enviar uma mensagem!',
    //         html: `<p>Agradeço o contato e em breve estarei respondendo em breve!</p>`,
    //         text: `Agradeço o contato e em breve estarei respondendo!`
    //     })
    //     .then((resposta) =>  console.log('email 2 enviado'))
    //     .catch((erro) => console.log('email 2 nao foi enviado'))
       
    // }

    // async function enviarEmail() {
    //     emailJose()
    //     await emailCliente()

    //     res.send('os 2 emais foram enviados')
    // }
    // enviarEmail()
})



const port = 3000
app.listen(process.env.PORT || port, () => console.log(`servidor rodando na porta ${port}`), console.log(`acesse o link http://localhost:${port}`))