const express = require('express')

const app = express()

app.get("/",(req, rs) => {
    this.resource.send("<h1>server is working</h1>")
})

module.exports = app