const configExpress = require('./config/configExpress');
const config = require('config');

app = configExpress()

app.listen(config.get('api.port'), () =>{
    console.log('Server rodando :-)')
})

// para iniciar o servidor tem que rodar o comando: npx nodemon api/index.js
