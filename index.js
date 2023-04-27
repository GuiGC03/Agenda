const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

// Models
const Agenda = require('./models/Agenda')

// routes
const agendaRoutes = require('./routes/agendasRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/agendas', agendaRoutes)

conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))
