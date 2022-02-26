import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CreateProduct from "../../components/CreateProduct";
import EditProduct from "../../components/EditProduct";
import ProductList from "../../components/ProductList";
import {
  selectShowModalToEdit,
  hideModalToEdit,
} from "../../slices/productSlice";

const ProductPage = () => {
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const showModalToEdit = useSelector(selectShowModalToEdit);
  const dispatch = useDispatch();

  const handleShowCreateProduct = () => {
    setShowCreateProduct(!showCreateProduct);
  };

  const handleHideModalToEdit = () => {
    dispatch(hideModalToEdit());
  };

  return (
    <Container>
      <Row>
        <Col lg={2}>
          <Button onClick={handleShowCreateProduct}>Create Product</Button>
        </Col>
        <Col>
          <ProductList />
          <CreateProduct
            show={showCreateProduct}
            handleHide={handleShowCreateProduct}
          />
          <EditProduct
            show={showModalToEdit}
            handleHide={handleHideModalToEdit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
