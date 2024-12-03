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
    // const products = await Product.find({}).sort('-name price'); // sort by name & price
    // const products = await Product.find({}).select('name price'); // select some fields
    // const products = await Product.find({}).select('name price').limit(4); // select some fields & show only 4 first items
    // const products = await Product.find({})
    //     .sort('name')
    //     .select('name price')
    //     .limit(10); // sort by name select some fields & show only 10 first items
    const products = await Product.find({})
        .sort('name')
        .select('name price')
        .limit(10)
        .skip(1); // sort by name select some fields & show only 10 first items & skip the first item
    // res.status(200).json({ products, nbHits: products.length });
    res.status(200).json({ nbHits: products.length, products });
}

const getAllProducts = async (req, res) => {
    // const { featured, company, name } = req.query; // find products by query
    const { featured, company, name, sort, fields } = req.query; // find products by query & sort

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
    // sort
    if (sort) {
        const sortedList = sort.split(',').join(' ');
        result = result.sort(sortedList);
    } else {
        result = result.sort('createdAt');
    }
    // select some fields
    if (fields) {
        const fieldsList = fields.split(',').join(' ');
        result = result.select(fieldsList);
    }

    const products = await result;
    res.status(200).json({ products, nbHits: products.length });
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}