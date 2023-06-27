const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!123')
})
app.get('/about', (req, res) => {
    res.send('ThienHuynh')
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})