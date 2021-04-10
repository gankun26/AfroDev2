class NaoEncontrado extends Error{
    constructor(){
      super('Agendamento nao encontrado');
      this.name = 'NaoEncontrado';
      this.idError = 5;
     }
}
module.exports = NaoEncontrado;