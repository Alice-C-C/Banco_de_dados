const Aeroporto = require('../models/aeroporto-model')

const store = (req, res) => {
    Aeroporto.create(req.body)
    res.json()
}

const index = (req,res) => {
    const content = Aeroporto.find().exec()

    res.json(content)
}

const show =(req,res) => {
    const content = Aeroporto.findById(req.params.id).exec()
    res.json(content)
}

const update =(req, res) => {
    Aeroporto.findByIdAndUpdate(req.params.id).exec()
    res.json()
}

const destroy = (req,res)=>{
    Aeroporto.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    show,
    index,
    update,
    destroy
}