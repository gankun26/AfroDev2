const router = require('express').Router()
const TabelaAgendamento = require('../../agendamentos/TabelaAgendamento');
const Agendamento = require('../../agendamentos/Agendamento')
const SerializadorAgendamento = require('../../Serializar').SerializarAgendamento;


router.get('/agendamentos', async (req, resp) =>{
    try{
        const results = await TabelaAgendamento.listar();
        const serializador = new SerializadorAgendamento(
            resp.getHeader('content-Type'),
            ['nome_servico', 'status']
        );
        agendamentos = serializador.tranformar(results)
        resp.status(200).send(agendamentos);
    }catch(error){
        resp.send(error)
    }
    
});

router.post('/agendamentos', async (req, resp) => {
    try{
        const reqAgendamento = req.body;
        const agendamento = new Agendamento(reqAgendamento);
        await agendamento.criar()
        resp.send(JSON.stringify(agendamento))
    }catch(error){
        resp.send(error)
    }
    
});

router.get('/agendamentos/:idAgendamento', async(req, resp) =>{
    try{
        const id = req.params.idAgendamento;
        const agendamento = new Agendamento({id:id});
        await agendamento.buscar();
        resp.send(JSON.stringify(agendamento));
    }catch(error){
        resp.send(JSON.stringify({
            mensagem: error.mensage
        }));
    }
});

router.put('agendamentos/:idAgendamento', async (req, resp) => {
    const id = req.params.idAgendamento;
    const dadosBody = req.body;
    const dados = Object.assign({}, dadosBody, {id: id});
    const agendamento = new Agendamento(dados);
    await agendamento.atualizar()
})

router.delete('/agendamentos/:idAgendamento', async (req, resp) =>{
    try{
        const id = req.params.idAgendamento;
        const agendamento = new Agendamento({id:id});
        await agendamento.remover();
        resp.status(204).send(JSON.stringify({mensagem:'Registro apagado'}))
    }catch(error){
        resp.send(JSON.stringify({
            mensagem: error.mensage
        }))
    }
})

module.exports = router