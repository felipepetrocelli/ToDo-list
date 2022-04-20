const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()
const port = 8000

//Rotas
app.get('/', function(req,res){
    res.send('Aplicativo Funcionando')
})

app.listen(port, () => {
    console.log(`Projeto rodando na porta ${port}`)
})