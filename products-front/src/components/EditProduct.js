import { useEffect, useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProductAsync,
  getAllProductsAsync,
  selectProductToEdit,
} from "../slices/productSlice";

const EditProduct = ({ show, handleHide }) => {
  const dispatch = useDispatch();
  const productToEdit = useSelector(selectProductToEdit);
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const discountRef = useRef();
  const activeRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { elements } = e.target;
    console.log(elements[1].value);

    const product = {
      name: elements[0].value,
      description: elements[1].value,
      price: elements[2].value,
      discount: elements[3].value,
      active: elements[4].checked,
    };

    const { _id: idProduct } = productToEdit;

    await dispatch(updateProductAsync({ id: idProduct, ...product }));
    dispatch(getAllProductsAsync());
  };

  useEffect(() => {
    if (productToEdit) {
      const { name, description, price, discount, active } = productToEdit;
      // Initial value to edit form
      nameRef.current.value = name;
      descriptionRef.current.value = description;
      priceRef.current.value = price;
      discountRef.current.value = discount;
      activeRef.current.checked = active;
    }
  }, [productToEdit]);

  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control required ref={nameRef}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Descriptrion:</Form.Label>
            <Form.Control required ref={descriptionRef}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price:</Form.Label>
            <Form.Control type="number" required ref={priceRef}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Discount:</Form.Label>
            <Form.Control
              type="number"
              required
              ref={discountRef}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Active"
              ref={activeRef}
            ></Form.Check>
          </Form.Group>
          <Button type="submit">Update</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProduct;
