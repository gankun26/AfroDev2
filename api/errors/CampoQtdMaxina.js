class CampoQtdMaxima extends Error{
    constructor(campo){
        const mensagem = `O campo ${campo} tem que ter no maximo 64 caracteres!`;
        super(mensagem);
        this.name = 'CampoQtdMaxima';
        this.idError = 4;
    }
}
module.exports = CampoQtdMaxima;