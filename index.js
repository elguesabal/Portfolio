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
    <style>
        .email {
            display: flex;
            justify-content: center;
        }

        .container {
            width: 80%;
            background-color: #0f0f0f;
            border-radius: 10px;
        }

        .content {
            width: 90%;
            height: 90%;
            margin: auto;
        }

        .container .content h2 {
            padding-top: 15px;
            color: rgb(192, 192, 192);
        }

        .container .content p {
            color: aliceblue;
        }

        .links {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .btn {
            background-color: white;
            padding: 10px;
            margin: 20px;
            border-radius: 10px;
            color: rgb(0, 0, 0);
            text-decoration: none;
            transition: 1s;
        }

        .btn:hover {
            background-color: rgb(180, 255, 255);
            box-shadow: 0 0 1000px 1px rgba(255, 255, 255, 1);
            margin-top: 0;
        }
    </style>

<div class="email">
    <div class="container">
        <div class="content">
            <h2>Obrigado por mandar mensagem</h2>
            <p>Agradeço o contato e em breve estarei respondendo em breve! Também sinta-se à vontade para mandar mensagens em outras plataformas como LinkedIn, e-mail e WhatsApp.</p>
            <div class="links">
                <a href="https://jose-antonio.vercel.app/" class="btn" target="_blank">Portfolio</a>
                <a href="https://www.canva.com/design/DAFTzR3VmGY/qLmFQigCW6Y8hRZ8Ly7gew/view?utm_content=DAFTzR3VmGY&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel" class="btn btn-outline-light" target="_blank">Currículo</a>
                <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-b14160240/" class="btn" target="_blank">LinkedIn</a>
                <a href="https://wa.me/qr/NO4ELMDAGM2BI1" class="btn" target="_blank">WhatsApp</a>    
            </div>
        </div>
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