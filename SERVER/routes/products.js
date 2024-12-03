let express = require('express')
let router = express.Router()
let Product = require('../models/products')

router.post('/produ', async(req, res) => {
    try {
        let products = new Product(req.body)
        await products.save()
        res.send({ products, msg: "done" })
    } catch {
        res.send("errr")
    }
})

//  all restaurant find
router.get('/produ', async(req, res) => {
    try {
        let products = await Product.find()
        if (products) {
            return res.send('products')
        } else {
            return res.send('products not found')
        }
    } catch {
        return res.send('errr')
    }
})

router.get('/produ/:id', async(req, res) => {
    try {
        let products = await Product.findById(req.params.id)
        if (!products) {
            return res.send('not found')
        } else {
            return res.send('products')
        }
    } catch {
        return res.send('errr')
    }
})

router.patch('/produ/:id', async(req, res) => {
    try {
        let products = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!products) {
            return res.send('not found')
        } else {
            return res.send('products')
        }
    } catch {
        return res.send('errr')
    }
})

router.delete('/produ/:id', async(req, res) => {
    try {
        let products = await Product.findByIdAndDelete(req.params.id)
        if (!products) {
            return res.send('not found')
        } else {
            return res.send('deleted')
        }
    } catch {
        return res.send('errr')
    }
})

module.exports = router