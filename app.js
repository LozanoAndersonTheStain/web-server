const express = require('express')
const hbs = require('hbs')

const app = express()

const port = 8013

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Anderson Lozano',
    titulo: 'Módulo Node JS',
  })
})

app.get('/elements', (req, res) => {
  res.render('elements')
})

app.get('/generic', (req, res) => {
  res.render('generic')
})

app.get('*', (req, res) => {
  res.render('404.hbs')
})

app.listen(port, () => {
  console.log(`Escuchandp en http://localhost:${port}`)
})
