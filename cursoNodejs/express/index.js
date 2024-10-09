const express = require('express')
const path = require('path')

const app = express()
app.use("/meusite", express.static(path.join(__dirname, 'client')))

app.get("/", (req, res) => {
    //res.set("Content-Type", "text/html")
    res.type("json")
    res.send("<h1>Hello World from get</>")
})

app.post("/", (req, res) => {
    res.send("<h1>Hello World from get</>")
})
const port = 5000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})