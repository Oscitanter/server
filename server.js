const express = require('express')
const app = express()

app.use(token)

app.get('/', (req, res) => {
   res.send('Pata "localhost:3000/Dananas"')
})

app.get("/Dananas", (req, res) => {
    res.send("Dimitris")
})

function token(req, res, next) {
console.log('Token')
next()
}

app.listen(3000)
