const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://diegolucasq:diegolucasq@cluster0.tpzao.mongodb.net/products?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
