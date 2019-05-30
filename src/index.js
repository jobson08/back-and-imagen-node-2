if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const app = require('./app');

//console.log('Envonment:', process.env.NODE_ENV);

//starta o sevidor
/*app.listen(app.get(port), () =>
{console.log('Sevidor na porta', app.get('port'));
});*/