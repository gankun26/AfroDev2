class DadosNaoInformados extends Error{
    constructor(){
      super('Dados nao informados');
      this.name = 'DadosNaoInformados';
      this.idError = 3;
     }
}
module.exports = DadosNaoInformados;