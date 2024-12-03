// controllers/products.js

const Product = require('../models/product');


const getAllProductsStatic = async (req, res) => {
    // const search = 'acc';

    // const products = await Product.find({
    //     name: { $regex: search, $options: 'i'}
    // });
    // const products = await Product.find({ page: '2' });
    // const products = await Product.find({}).sort('name'); // sort by name
    // const products = await Product.find({}).sort('-name'); // sort by name
    const products = await Product.find({}).sort('-name price'); // sort by name & price
    res.status(200).json({ products, nbHits: products.length });
}

const getAllProducts = async (req, res) => {
    // const { featured, company, name } = req.query; // find products by query
    const { featured, company, name, sort } = req.query; // find products by query & sort

    const queryObject = {};

    if (featured) {
        // queryObject.featured = featured === 'true' ? true : false;
        queryObject.featured = featured === 'true';
    }

    if (company) {
        queryObject.company = company;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: 'i'};
    }

    // console.log(queryObject);
    // const products = await Product.find(queryObject); // find products by query w/o sorting
    let result = Product.find(queryObject); // find products by query w/o sorting

    if (sort) {
        const sortedList = sort.split(',').join(' ');
        result = result.sort(sortedList);
    } else {
        result = result.sort('createdAt');
    }

    const products = await result;
    res.status(200).json({ products, nbHits: products.length });
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}