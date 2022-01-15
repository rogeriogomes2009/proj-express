const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const clientesRouter = require('./routes/clientes')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/*app.use((req, res, next) => {
  console.log('passou por aqui')
  res.send('não tem mais acesso')
})*/

app.use('/', indexRouter)
app.use('/clientes', clientesRouter)


app.listen(port, () => console.log('Listering on port:'+port))