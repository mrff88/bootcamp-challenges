import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAsync,
  getAllProductsAsync,
  selectProducts,
  productToEdit,
} from "../slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  const updateProduct = (product) => {
    dispatch(productToEdit(product));
  };

  const deleteProduct = (id) => {
    dispatch(deleteProductAsync(id));
  };

  return (
    <div>
      {products?.length &&
        products.map((product, index) => (
          <Card key={index}>
            <Card.Body>
              {product.name}: {product.price}
              <Button onClick={() => updateProduct(product)}>Edit</Button>
              <Button onClick={() => deleteProduct(product._id)}>Delete</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default ProductList;
