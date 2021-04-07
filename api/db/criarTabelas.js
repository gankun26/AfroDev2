const ModeloTabelaAgendamento = require('../agendamentos/modelTabelaAgendamento');

ModeloTabelaAgendamento.sync()
  .then(() =>{
      console.log('Tabela criada com sucesso')
  })
   .cath(
       console.log('Error, tabela nao criada')
   );