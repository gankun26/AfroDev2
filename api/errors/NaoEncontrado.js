class NaoEncontrado extends Error{
    constructor(classe){
      super(`${classe} nao encontrado`);
      this.name = 'NaoEncontrado';
      this.idError = 5;
     }
}
module.exports = NaoEncontrado;