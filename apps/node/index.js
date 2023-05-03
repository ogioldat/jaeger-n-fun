import express from 'express'

const app = express()
const port = 3000

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening on port ${port}`)
})