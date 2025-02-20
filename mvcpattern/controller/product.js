const productModel = require('../model/product');

module.exports.getProduct = async (req, res) => {
    try {
        let data = await productModel.find();
        res.json(data)
    }
    catch (err) {
        console.log(err.message)
    }
}


module.exports.postProduct = async (req, res) => {
    try {
        const newProduct = new productModel(req.body);
        await newProduct.save();
        res.json({ message: 'product is created' });
    }
    catch (err) {
        console.log(err.message)
    }
}