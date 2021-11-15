const express = require('express')
const app = express()
const path = require('path')
const port = 8080

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
  //res.send('Hello World!')
})

app.get('/about', (req, res) => {
    //res.send('Hello World!')
    //res.send('This is about page!!!')
    res.sendFile(path.join(__dirname, 'index.html'))
    //res.status(500)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
