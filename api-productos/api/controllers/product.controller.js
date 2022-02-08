import { Product } from "../models/index.js";

// Controller get all products
export const getAllProducts = async (request, response) => {
  const products = await Product.find();
  response.json(products);
};

// Controller get one product
export const getOneProduct = async (req, res) => {
  const { id: idProduct } = req.params;
  const product = await Product.findById(idProduct);
  res.json(product);
};

// Controller create one product
export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  const newProduct = await product.save();
  res.json(newProduct);
};
