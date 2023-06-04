const express = require('express')

function getPythonServiceUrl() {
    const url = process.env.PY_SERVICE_URL

    if (!url) {
        throw new Error('No PY_SERVICE_URL!')
    }

    return url
}

(async function bootstrap() {
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
        res.send('Hello from NodeJS app!')
    })

    app.get('/py-service', async (req, res) => {
        const serviceUrl = getPythonServiceUrl()
        const pingUrl = `http://${serviceUrl}`
        const data = await fetch(pingUrl)
        const response = await data.text()

        res.send(response)
    })

    app.listen(port, '0.0.0.0', () => {
        console.log(`App listening on port ${port}`)
    })
})()

