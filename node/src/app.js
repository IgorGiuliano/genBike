//IMPORTAÇÃO
const express       = require('express')
const exphbs        = require('express-handlebars')
const userRoutes    = require('./routes/userRoutes')
const path          = require('path')

const app = express()

//DEFINE PATH PARA AS VIEWS, ENGINE DO HANDLEBARS E A EXTENSÃO HBS
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({defaultLayout: 'defaultLayout', extname: '.hbs'}));
app.set('view engine', 'hbs');

//DEFINE DIRETÓRIO DE ARQUIVOS ESTÁTICOS (CSS,JS,IMAGENS)
app.use(express.static('public'))

app.use(userRoutes)

//DEFINE PORTA
app.listen(3000, (error, result)=>{
    if(error) throw error
    console.log('Server is listening to port 3000')
})