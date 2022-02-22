import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAsync,
  getAllProductsAsync,
  selectProducts,
} from "../slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  const updateProduct = (id) => {
    console.log(id);
  };

  const deleteProduct = (id) => {
    console.log(id);
    dispatch(deleteProductAsync(id));
  };

  return (
    <div>
      {products?.length &&
        products.map((product, index) => (
          <Card key={index}>
            <Card.Body>
              {product.name}: {product.price}
              <Button onClick={() => updateProduct(product._id)}>Edit</Button>
              <Button onClick={() => deleteProduct(product._id)}>Delete</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default ProductList;
