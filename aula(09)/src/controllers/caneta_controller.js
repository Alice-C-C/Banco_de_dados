const Caneta = require('../models/caneta_model.js')

const store = (req, res) => {
    Caneta.create(req.body)
    res.json()
}

const index = (req,res) => {
    const content = Caneta.find().exec()

    res.json(content)
}

const show =(req,res) => {
    const content = Caneta.findById(req.params.id).exec()
    res.json(content)
}

const update =(req, res) => {
    Caneta.findByIdAndUpdate(req.params.id).exec()
    res.json()
}

const destroy = (req,res)=>{
    Caneta.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    show,
    index,
    update,
    destroy
}