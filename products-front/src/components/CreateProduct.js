import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  createProductAsync,
  getAllProductsAsync,
} from "../slices/productSlice";

const CreateProduct = ({ show, handleHide }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { elements } = e.target;

    const product = {
      name: elements[0].value,
      description: elements[1].value,
      price: elements[2].value,
      discount: elements[3].value,
      active: elements[4].checked,
    };
    await dispatch(createProductAsync(product));
    dispatch(getAllProductsAsync());
  };

  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header>
        <Modal.Title>Create Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Descriptrion:</Form.Label>
            <Form.Control required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price:</Form.Label>
            <Form.Control type="number" required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Discount:</Form.Label>
            <Form.Control type="number" required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label="Active"></Form.Check>
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateProduct;
