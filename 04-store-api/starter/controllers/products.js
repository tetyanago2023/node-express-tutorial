// controllers/products.js

const Product = require('../models/product');


const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({ name: 'wooden table' });
    res.status(200).json({ products, nbHits: products.length });
}

const getAllProducts = async (req, res) => {
    res.status(200).json({msg: 'products route'});
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}