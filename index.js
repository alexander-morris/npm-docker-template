const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

const port = process.env.PORT || 3000;

console.log('process is ', process.env)

app.get('/', (req, res) => res.send('hello al!'))

app.listen(port, () => {
  console.log('MY REST API IS RUNNING ON PORT ' + port)
})
