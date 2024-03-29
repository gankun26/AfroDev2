const express = require('express');
const routesAgendamento = require('../routes/agendamentos');
const routesUsuario = require('../routes/usuarios');
const routesLogin = require('../routes/login')
const FormatoInvalido = require('../errors/FormatoInvalido');
const FormatosValidos = require('../Serializar').FormatosValidos;
const NaoEncontrado = require('../errors/NaoEncontrado');
const CampoInvalido = require('../errors/CampoInvalido');
const serializarError = require('../Serializar').serializarError;
const DadosNaoInformados = require('../errors/DadosNaoInformados');
const passport = require('../usuarios/autenticacao');


module.exports =  () =>{
    const app = express()

    app.use((req, resp, next) =>{
        let formatoSolicitado = req.header('Accept');
        if(formatoSolicitado === '*/*'){
            formatoSolicitado = 'application/json'
        }
        if(FormatosValidos.indexOf(formatoSolicitado) === -1){
            resp.status(406);
            return resp.send();
        }
        resp.setHeader('Content-Type', formatoSolicitado);
        next();
    });


    app.use(express.json())
    app.use('/api', routesAgendamento)
    app.use('/api', routesUsuario)
    app.use('/api', routesLogin)
    app.use((error, req, resp, next) =>{
        let status = 500;
        if(error instanceof CampoInvalido || error instanceof DadosNaoInformados){
           status = 400
        }
        if(error instanceof NaoEncontrado){
            status = 404
        }
        if(error instanceof FormatoInvalido){
            status = 406
        }
        serializarError = new serializarError(
            resp.getHeader('content-Type')
        )
        resp.status(status).send(
              serializarError.transformar({
                  id: error.id,
                  mensagem: error.message
              })
        )
    })

    return app
}