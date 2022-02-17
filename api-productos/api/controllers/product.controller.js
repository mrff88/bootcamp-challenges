import { Product } from "../models/index.js";

// Controller get all products
export const getAllProducts = async (request, response) => {
  try {
    const products = await Product.find();
    if (products.length === 0) response.status(204).send();
    else response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ error });
  }
};

// Controller get one product
export const getOneProduct = async (req, res) => {
  const { id: idProduct } = req.params;
  const product = await Product.findById(idProduct);
  res.json(product);
};

// Controller create one product
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const newProduct = await product.save();
    newProduct && res.status(201).json(newProduct);
  } catch (error) {
    response.status(500).json({ error });
  }
};

// Controller update one product
// export const updateProduct = async (req, res) => {
//   const { id: idProduct } = req.params;
//   const productToUpdate = req.body;
//   const product = await Product.findById(idProduct);
//   Product.updateOne(product, productToUpdate, (error, updatedProduct) => {
//     if (!error) {
//       res.json(updatedProduct);
//     } else res.status(500).send(error);
//   });
// };

export const findProduct = async (req, res, next) => {
  const { id: idProduct } = req.params;

  try {
    const product = await Product.findById(idProduct);
    if (product) {
      req.data = { product };
      next();
    } else {
      req.status(204).json({ error: "No product" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateProduct = async (req, res) => {
  const productToUpdate = req.body;
  const { product } = req.data;

  try {
    Product.updateOne(product, productToUpdate, (error, updatedProduct) => {
      if (!error) {
        res.status(200).json(updatedProduct);
      } else res.status(500).send(error);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteProduct = async (req, res) => {
  const { id: idProduct } = req.params;
  try {
    const productToDelete = await Product.findById(idProduct);
    if (!productToDelete) {
      res.status(204).send({ err: "No product to delete" });
    } else {
      const deletedProduct = await Product.deleteOne(productToDelete);
      if (deletedProduct) res.status(200).json(deletedProduct);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
