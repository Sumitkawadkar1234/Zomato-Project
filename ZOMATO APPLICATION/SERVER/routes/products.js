let express = require('express')
let router = express.Router()
let Product = require('../models/products')
let Restaurant=require('../models/restaurant')

// router.post('/produ', async(req, res) => {
//     try {
//         let products = new Product(req.body)
//         await products.save()
//         res.send({ products, msg: "done" })
//     } catch {
//         res.send("errr")
//     }
// })

router.post('/product', async(req, res) => {
        try {
            const {name,description,price,image,restroId}=req.body
            const restaurant =await Restaurant.findById(restroId);
            console.log(restaurant,"rrrr");
            if(!restaurant){
                return res.status(404).json({message:'Restaurant not found'});
            }
            const product=new Product({
                name,
                description,
                image,
                price,
                restaurant: restroId
            })
            await product.save();
            return res.status(201).json(product);

        }
        catch(err){
            console.error(err);
            return res.status(500).json({message:'Server error'})
        }
    })
 
//  all restaurant find
router.get('/product', async(req, res) => {
    try {
        let products = await Product.find()
        if (products) {
            return res.send(products)
        } else {
            return res.send('products not found')
        }
    } catch {
        return res.send('errr')
    }
})

router.get('/product/:id', async(req, res) => {
    try {
        let products = await Product.findById(req.params.id)
        if (!products) {
            return res.send('not found')
        } else {
            return res.send('product')
        }
    } catch {
        return res.send('errr')
    }
})

router.patch('/product/:id', async(req, res) => {
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

router.delete('/product/:id', async(req, res) => {
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