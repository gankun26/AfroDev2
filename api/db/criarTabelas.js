const ModeloTabelaAgendamento = require('../agendamentos/modelTabelaAgendamento');
const ModeloTabelaUsuario = require('../usuarios/modelTabelaUsuario');

ModeloTabelaAgendamento.sync()
  .then(() =>{
      console.log('Tabela criada com sucesso')
  })
  .catch((error) =>{
       console.log('Error, tabela nao criada', error)
    });

    ModeloTabelaUsuario.sync()
    .then(() =>{
        console.log('Tabela criada com sucesso')
    })
    .catch((error) =>{
         console.log('Error, tabela nao criada', error)
      });    

      
//comando para criar tabelas: node api/db/criarTabelas
