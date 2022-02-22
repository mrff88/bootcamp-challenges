import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CreateProduct from "../../components/CreateProduct";
import ProductList from "../../components/ProductList";

const ProductPage = () => {
  const [showCreateProduct, setShowCreateProduct] = useState(false);

  const handleShowCreateProduct = () => {
    setShowCreateProduct(!showCreateProduct);
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
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
