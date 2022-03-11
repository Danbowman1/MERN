const Product = require("../models/product.model")

module.exports = {

    createProduct: (req, res)=>{
        Product.create(req.body)
            .then((newProduct)=>{
                console.log(newProduct)
                res.json(newProduct)
            })
            .catch((err)=>{
                console.log("Something went wrong in createProduct")
                res.status(400).json(err)
            })
    },

    getAllProducts: (req, res)=>{
        Product.find()
            .then(allProducts=>{
                console.log(allProducts)
                res.json(allProducts)
            })
            .catch(err=>{
                console.log(err)
                res.json(err)
            })
    }

}