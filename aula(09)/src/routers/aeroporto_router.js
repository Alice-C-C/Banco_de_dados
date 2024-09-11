const express = require('express')
const router = express.Router()

const aeroporto_controller = require('../controllers/aeroporto_controller')
const cep_endereco = require("../midlewares/cep_endereco.js")

router.post("/", cep_endereco, aeroporto_controller.store)
router.get("/", aeroporto_controller.index)
router.get("/:id", aeroporto_controller.show)
router.put("/:id", aeroporto_controller.update)
router.delete("/:id", aeroporto_controller.destroy)

module.exports = router