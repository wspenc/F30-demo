const express = require("express")
const path = require('path')

const app = express()

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 5000

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})