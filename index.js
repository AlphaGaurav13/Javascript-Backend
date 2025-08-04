require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/gaurav', (req, res) => {
  res.send('Gauravdotcom')
})

app.get('/login', (req, res) => {
  res.send('Login Kar le bhai :)')
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${port}`)
})