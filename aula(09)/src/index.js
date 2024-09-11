const express = require("express")
const caneta_router = require("./routers/caneta.router.js")
const moto_router= require("./routers/moto_router.js")
const aeroporto_router= require("./routers/aeroporto_router.js")


const app = express()
const port = 5000

app.use(express.json())
// app.use(cep_endereco) // Middleware de uso global

app.use("/caneta", caneta_router)
app.use("/moto", moto_router)
app.use("/aeroporto", aeroporto_router)

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})