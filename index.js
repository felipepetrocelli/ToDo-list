const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')


const app = express()
const port = 8000

const noteRoutes = require('./routes/notes')

// template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

//Rotas
app.get('/', function (req, res) {
    res.render('home')
})

app.use('/notes', noteRoutes)

app.listen(port, () => {
    console.log(`Projeto rodando na porta ${port}`)
})