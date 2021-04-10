class FormatoInvalido extends Error{
    constructor(contentType){
       const mensagem = `O tipo ${contentType} é invalido, A API aceita somente JSON`;
       super(mensagem);
       this.name = 'FormatoInvalido';
       this.idError = 6;
    }
}
module.exports = FormatoInvalido;