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
    }


}