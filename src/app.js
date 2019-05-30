

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require("path");
const exphbs = require('express-handlebars');

const app = express();


 require('./database');

//Sentings
const port = process.env.PORT || 4000;

//app.set('port', process.env.PORT );

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    defaultLayout:'compMain',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) =>{
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('image'));

//Routes
app.use(require("./route"));


//starta o sevidor
app.listen(port, () => console.log(`Sevidor na porta ${port}`));

module.exports = app;