require('dotenv').config();
const configExpress = require('./config/configExpress');
const config = require('config');

app = configExpress()

app.listen(config.get('api.port'), () =>{
    console.log('Server rodando :-)')
})

// para iniciar o servidor tem que rodar o comando: npx nodemon api/index.js

//comando para gerar o token do JWT = console.log(require('crypto').randomBytes(256).toString('base64'))
//token da JWT abaixo.
/*26bqUAwMTURwQcQOC3aQngPJxYoMqvXFMFEoOXNv8hDUASMhU2eiMSjccw7xe1HZCFMkPhZj/PjzB14Tjtdui4iDijRphYwh7AxSkF0brzMazigeA2WfK6nuqUYeGDk/lJIb5CDSDT69E68fowRv0vW4Y9QTTB7zYT1yJbgs6cMibYTe/gDd3IdykCmiCBYR6U5vayGoD0TkZ/ZS6uJCJytr8vFI27Pym50Go9ezpL17ATfLXoeky3OuGY4pQ8Kmt0eVRNsjya1fiqk7uNwNnfv13dOhG6NNO7CD9DAOIPkLmJX+oAQ5HZnJy8Y3L29CdnZE4vG18+zrfjKwwt7OoQ==*/ 